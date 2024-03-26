// Copyright (c) 2024 Kai Nguyen All rights reserved
//
// Created by: Kai Nguyen
// Created on: Mar 2024
// This file contains the JS functions for index.html
function findVolumeClicked() {
  const lengthInput = parseInt(document.getElementById("length-entered").value)
  const totalVolume = lengthInput ** 3 
  document.getElementById("answer").innerHTML = "The volume is: " + totalVolume.toFixed(2) + " cm<sup>3"
}

