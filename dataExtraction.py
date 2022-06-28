# Read the text file
# duration, which utterance, condition (1: they/them, 2: it/its, 3: control)
import re
import os
import argparse

def get_files(dirname): 
    """A generator: recursively navigates a directory, yielding each file's
    full filepath instead of just the filename."""
    for root, dirs, files in os.walk(dirname): 
        for fname in files: 
            yield os.path.join(root, fname)

def get_data(fp):
    fp.seek(0)
    lines = []
    for line in fp.readlines():
        match = re.search(r'App.+', line)
        if match:
            lines.append(1)
        else:
            lines.append(0)
    return lines

def main(args):
    fp_input = args.inputFILE
    filename = str(args.id) + ".txt"
    with open(filename, "w") as fp_output:
        fp_output.write("ID: " +  str(args.id) + "\n")
        for line in fp_input.readlines():
            match = re.search(r'API.+', line)
            if match:
                # data = re.search(r'\s.+', line)
                fp_output.write(match.string[15:])
        
        # open output file with write access
            # output file is empty, with the filename being participant ID number
        # if the line starts with "App.js:" then write it to the output file with "App.js" part stripped.
        # save the output file

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