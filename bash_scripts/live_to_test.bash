#!/bin/bash

grep -rRIl --exclude-dir=bash_scripts  https:// /home/coachlamb92/Projects/coachlamb92.github.io | xargs sed -i 's/https:\//\/home\/coachlamb92\/Projects/g'
