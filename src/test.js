import axios from "axios";

function getStationsByPrice(price) {
	return axios.get('<https://test.oilnow.co.kr/gstations?price=>' + price)
		.then(function (res) {
			// return station id list (example: ["A001", "A002"])
			return res;
		})
		.catch(function (err) {
			return [];
		})
}

let list = getStationsByPrice(1300)
	.then(function(res1){
		return getStationsByPrice(1400)
		.then(function(res2){
			return res1.concat(res2) 
		})
	});

console.log(list);

const axios = require('axios');

async function getStationsByPrice(price){
    try{
        return await axios.get(`<https://test.oilnow.co.kr/gstations?price=>
		${price}`);
    }catch(error){
        console.error(error);
		return [];
    }
};


function getStationListsByPrice(targetPrice, secondTarget){
	getStationsByPrice(targetPrice)
	.then(function(res1){
		return getStationsByPrice(secondTarget)
		.then(function(res2){
			return res1.concat(res2) 
		})
	});
}

let list = getStationsListsByPrice(1300, 1400);

console.log(list);