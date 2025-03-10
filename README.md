# Token Bucket

A TokenBucket implementation for Luau.

## Use

TokenBucket is very simple to use, either see the [API](https://yetanotherclown.github.io/token-bucket-luau/api) or follow this example below.

```lua
local TokenBucket = require("@packages/TokenBucket")

local bucket = TokenBucket.new(10, 1)

-- `TokenBucket:add()` should be called on a fixed interval
local update = coroutine.create(function()
    while wait(1) do
        bucket:add()
    end
end)

coroutine.resume(update)

-- `TokenBucket:remove()` is called to remove a token from the bucket
local tokenWasRemoved = bucket:remove()

if tokenWasRemoved == true then
    -- This is when you drop the packet
elseif tokenWasRemoved == false then
    -- This is when you can forward the packet
end
```

## Installation

TokenBucket can be installed using Pesde and Wally, or you can simply copy and paste the source directly.

### Pesde

Install from the command line with,

```sh
> pesde add yetanotherclown/token_bucket --target luau --alias TokenBucket
```

Or from your `pesde.toml`,

```toml
[dependencies]
TokenBucket = { name = "yetanotherclown/token_bucket", version = "^0.1.0", target = "luau" }
```

### Wally

Install from your `wally.toml`,

```toml
[dependencies]
TokenBucket = "yetanotherclown/token-bucket@0.1.0"
```