# Max consecutive ones
This repository has the NodeJS code to solve the problem of MAX CONSECUTIVE ONES. 
It is meant to find in an array of number the bigger sequence of ones consecutively. It also receives a window size, which allows to swap 0 to 1 for a specific number of times.

## install

Just run `npm install` to install the nodejs dependencies

## run

It is possible to run the function directly by executing the following command:

`node index 1,1,1,0,0,0,1,1,1,1,0 2`

where `1,1,1,0,0,0,1,1,1,1,0` is the array of numbers and `2` is the window size.

## jest

For automated test there is `jest` already configured.

`npm test`
