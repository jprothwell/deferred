function Deferred(handler) {
	if (!(this instanceof Deferred)) {
		return new Deferred();
	}

	var self = this;
	self.promise = new Promise(function(resolve, reject) {
		if (handler) {
			handler(resolve, reject);
		}
		self.resolve = resolve;
		self.reject = reject;
	});
	return self;
}

export default Deferred;
