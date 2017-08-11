# sns-batch

Send a batch of SNS messages, and execute a callback when all are complete

## Abstract

`aws-sdk` doesn't have a way to send multiple msgs in a single call. If you need to send multiple msgs, you have to wrangle a bunch of callbacks.

## Installation

`npm install sns-batch`


## Usage

```
const aws = require('aws-sdk');
aws.config.update({region: 'us-west-2'});

// Pass in configured aws client
const sns = require('sns-batch')(aws);

const msgs = [
  { TargetArn: 'my arn', Message: "msg one" },
  { TargetArn: 'my other arn', Message: "msg two" },
  { TargetArn: 'my arn', Message: "msg three" },
  { TargetArn: 'my arn', Message: "msg four" },
  { TargetArn: 'my arn', Message: "msg five" },
  { TargetArn: 'my arn', Message: "msg six" }
];

function done(err, results) {
  console.log(results);
}

sns(msgs, done);
```

## LICENSE
### The MIT License (MIT)
Copyright (c) 2017 Mark Wilkerson

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

