import os
import subprocess

print("I am testing post-commit hooks")

# Path to your Python script
python_script = "./python/sum-of-two-number.py"

# Run the Python script
try:
    subprocess.run(["python3", python_script], check=True)
    print("The Python script ran successfully.")
    exit(0)
except subprocess.CalledProcessError:
    print("The Python script encountered an error.")
    exit(1)