--[=[
	A TokenBucket implementation for ratelimiting.

	@ignore
	@class TokenBucketImpl
]=]
type TokenBucketImpl = {
	__index: TokenBucketImpl,

	--- The max tokens the bucket can contain
	capacity: number,
	--- The amount of tokens the bucket will refill on `TokenBucket:add()`
	refillRate: number,
	--- The current amount of available tokens
	tokens: number,

	--- Adds tokens based on the refill rate.
	--- This should be called on an interval such as every second.
	add: (self: TokenBucket) -> (),
	--- Attempts to remove a token. Returns a boolean to represent
	--- whether a token was removed or not.
	remove: (self: TokenBucket) -> boolean,

	--- Creates a new TokenBucket with a specified capacity and refill rate.
	--- The TokenBucket will start out initially with the capacity given.
	new: (capacity: number, refillRate: number) -> TokenBucket,
}

export type TokenBucket = typeof(setmetatable(
	{} :: TokenBucketImpl,
	{} :: TokenBucketImpl
))

--- @class TokenBucket
--- A TokenBucket implementation for ratelimiting.
local TokenBucket: TokenBucketImpl = {} :: TokenBucketImpl
TokenBucket.__index = TokenBucket

--- Adds tokens based on the refill rate.
--- This should be called on an interval such as every second.
function TokenBucket:add()
	if self.tokens == self.capacity then
		return
	end

	self.tokens = math.min(self.tokens + self.refillRate, self.capacity)
end

--- Attempts to remove a token. Returns a boolean to represent
--- whether a token was removed or not.
function TokenBucket:remove(): boolean
	if self.tokens <= 0 then
		return false
	end

	self.tokens -= 1

	return true
end

--- Creates a new TokenBucket with a specified capacity and refill rate.
--- The TokenBucket will start out initially with the capacity given.
function TokenBucket.new(capacity: number, refillRate: number)
	local self = {
		capacity = capacity,
		refillRate = refillRate,
		tokens = capacity,
	}

	return setmetatable(self :: TokenBucketImpl, TokenBucket)
end

return TokenBucket
