local TokenBucket = require("../src")

local bucket = TokenBucket.new(10, 1)

assert(bucket:remove() == true, "Bucket is full, but fails to remove token")
assert(bucket.tokens == 9, "Bucket was not drained")

for _ = 1, 9 do
	bucket:remove()
end

assert(bucket:remove() == false, "Bucket is empty, but still removes a token")
assert(bucket.tokens == 0, "Bucket was not drained")

for _ = 1, 15 do
	bucket:add()
end

assert(bucket.tokens == 10, "Bucket overflowed")

print("All tests passed")
