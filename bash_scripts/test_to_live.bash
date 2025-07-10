#!/bin/bash

grep -rRIl --exclude-dir=bash_scripts  /home/coachlamb92/Projects/ /home/coachlamb92/Projects/coachlamb92.github.io | xargs sed -i 's/[\/]home.*Projects/https:\//g'
