import React from "react";
import { useState } from "react";

//create your first component
export const BlindingLights = () => {
	
	//declaring the useState for the lights
	const [redTurnedOn, setRedTurnedOn] = useState (false)
	const [yellowTurnedOn, setYellowTurnedOn] = useState (false)
	const [greenTurnedOn, setGreenTurnedOn] = useState (false)
	const [autoTraffic, setAutoTraffic] = useState (true)
	const [looping, setLooping] = useState (undefined)
	
	//declaring the handleFunctions to turn on/off the lights
	const handleRedTurnedOn = (event) => {
		setRedTurnedOn (prev => !prev)
		setYellowTurnedOn (false)
		setGreenTurnedOn (false)
	}
	const handleYellowTurnedOn = (event) => {
		setYellowTurnedOn (prev => !prev)
		setRedTurnedOn (false)
		setGreenTurnedOn (false)
	}
	const handleGreenTurnedOn = (event) => {
		setGreenTurnedOn (prev => !prev)
		setYellowTurnedOn (false)
		setRedTurnedOn (false)
	}	

	//defining the toggle for the button
	const handleAutoTraffic = (event) => {
		setAutoTraffic (prev => !prev)
	}

	//making the auto-looping function
	let counter = 0;

	function trafficFunction () {
		counter++
		console.log(counter)
		if(counter < 11){
			setGreenTurnedOn (true)
			console.log("verde")
		}
		if(counter > 10 && counter < 21){
			setYellowTurnedOn(true)
			console.log("amarillo")
		}
		if(counter > 20 && counter < 30){
			setRedTurnedOn(true)
			console.log("rojo")
		}
		if(counter == 30){
			counter = 0
		}
	}


 	//killing the loop
	function killTheLoop (event) {
		clearInterval(looping);
		setLooping (undefined);
	}

	//button functions
	function toStart (event) {
		setLooping(setInterval(trafficFunction, 1000));
		handleAutoTraffic();
	}

	function toStop (event) {
		killTheLoop();
		handleAutoTraffic();
	}

	//final display
	return (
		<div>
			<div className="container bg-black justify-content-center mx-auto p-2" style={{width: "50px", height: "50px"}}></div>
			<div className="container bg-black justify-content-center mx-auto mb-5 p-2 rounded" style={{width: "200px", height: "500px"}}>
				<div className={`rounded-circle mx-auto my-2 bg-danger border border-5 ${redTurnedOn? "" : "border-dark"}`} onClick={handleRedTurnedOn} style={{width: "150px", height: "150px"}}></div>
				<div className={`rounded-circle mx-auto my-2 bg-warning border border-5 ${yellowTurnedOn? "" : "border-dark"}`} onClick={handleYellowTurnedOn} style={{width: "150px", height: "150px"}}></div>
				<div className={`rounded-circle mx-auto my-2 bg-success border border-5 ${greenTurnedOn? "" : "border-dark"}`} onClick={handleGreenTurnedOn} style={{width: "150px", height: "150px"}}></div>
			</div>
			<div className="container d-flex justify-content-center mb-3">
				{ autoTraffic ? (
					<button type="button" className="btn btn-primary btn-lg me-1" onClick={toStart}>Do your stuff, Traffic Light!</button>
					) : (
						<button type="button" className="btn btn-danger btn-lg me-1" onClick={toStop}>Stop your stuff, Traffic Light!</button>
					)
				}
			</div>
		</div>
	);
};

