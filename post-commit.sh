#!/bin/sh

echo "I am testing post-commit hooks"

# Path to your Python script
python_script="./python/sum-of-two-number.py"

# Run the Python script
python3 "$python_script"

# Check the exit status
if [ $? -eq 0 ]; then
  echo "The Python script ran successfully with exit code 0."
  exit 0
else
  echo "The Python script encountered an error with exit code 1."
  exit 1
fi
