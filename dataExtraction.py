"""
dataExtraction.py
"""

import re
import os
import argparse

# NOT USED
def get_files(dirname): 
    """
    Recursively navigates a directory, yielding each file's full filepath instead of just the filename.
    """
    for root, dirs, files in os.walk(dirname): 
        for fname in files: 
            yield os.path.join(root, fname)

# NOT USED
def get_data(fp):
    """
    input: file pointer
    output: list of lines that starts with 'App.js:'
    """
    fp.seek(0)
    lines = []

    for line in fp.readlines():
        match = re.search(r'App.+', line)
        if match:
            lines.append(1)
        else:
            lines.append(0)
    return lines

"""
For now, it is assumed that data will be processed for each participant.
Copy console log into a text file and put it in as args along with participant ID.
"""
def main(args):
    fp_input = args.inputFILE
    filename = str(args.id) + ".txt"  # participant ID is the name of output file 
    with open(filename, "w") as fp_output:
        fp_output.write("ID: " +  str(args.id) + "\n")  # first line
        # if the line starts with "App.js:" then write it to the output file with "App.js" part stripped.
        for line in fp_input.readlines():
            match = re.search(r'App.+', line)
            if match:
                fp_output.write(match.string[9:])

if __name__ == "__main__":
    parser = argparse.ArgumentParser(description="Open log file to read data and " +\
                        "create a file to write out relevant data for the experiment.")
    parser.add_argument("--inputFILE", "-i", required=True, type=argparse.FileType('r'),
                            help="console log file to read data from")
    parser.add_argument("--id", required=True, type=int, help="ID of the participant data")
    # parser.add_argument("--outputFILE", "-o", required=True, type=argparse.FileType('wb'),
    #                         help="an outout file to save the experiment data")

    args = parser.parse_args()
    main(args)