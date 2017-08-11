// This is a lil fugly but I have shit to do...
module.exports = aws => {
	if (!aws || !aws.SNS) {
		throw new MissingAWSException();
	}

	const sns = new aws.SNS();

	return batch;

	function batch(msgs, callback) {
		const promises = msgs.map(send);
		Promise.all(promises).then(callback);
	}

	function send(obj) {
		return new Promise(callback);

		function callback(resolve, reject) {
			const params = {
				Message: obj.Message,
				TargetArn: obj.TargetArn
			};

			function handler(err, data) {
				if (err) {
					return reject(err);
				}
				resolve(data);
			}

			sns.publish(params, handler);
		}
	}
};

function MissingAWSException() {
	this.message = `
	Missing or invalid aws-sdk instance provided.
	See: https://github.com/markhuge/node-sns-batch#usage
	`;

	this.name = 'MissingAWSException';
}
