# ink

code for ink, the decentralized social network.

## features

- post a blot
- claim your $INK token
- tip a user in $INK
- tip a post in $INK

## functions

- `register`: registers an address on the `userIndex` mapping
- `createPost`: creates a post on the `postIndex`
- `getUserPost`: returns `Post[]`array from inputted values
- `getUser`: returns `UserDeets` from inputted values
- `getPost`: returns `Post` from inputted values
- `getPosts`: returns details about posts given the starting and ending indexes
- `_tipUser`: tips a user given amount and address
- `tipOnPost`: tips a specific post based on inputted values
