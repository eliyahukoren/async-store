const telemetry = {};
const lastUpdated = {};

export const myLocalStore = {
	telemetry: {
		set: function (key, val) {
			return new Promise((resolve) => {
				Object.assign(telemetry, {[key]: val});
				resolve();
			})
		},

		get: function () {
			return telemetry;
		},

		clear: function(){
			console.log({before:telemetry})
			Object.keys(telemetry).forEach((key) => {
				delete telemetry[key];
			});
			console.log({after:telemetry})
		}
	}
};
