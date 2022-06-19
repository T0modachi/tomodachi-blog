---
title: 'Camel Oracle Advance Queue (OAQ) Batch'
date: '2022-06-19'
excerpt: 'Batch OAQ comsumer in camel JMS(sjms2)'
cover_image: '/images/post/img1.jpg'
---
## Batch OAQ comsumer in camel JMS(sjms2) 

recently at my job we had the need to dequeue in batch from oaq.

The context is that we have some legacy third-party systems, and we have the need to having
**domain events**, of course the legacy code hardly can support this feature. So we decided
to just have and Oracle Advance Queue that is filled with a trigger on a table.

A partner developer wrote a camel program that dequeue from OAQ, the problem is that 
open one transacction and commit for each message, transactions are slow in oracle and
the best performance was about 3 messages per second... we have times were the deep of the OAQ
reach the 10.000 messages, so cleary we need more speed.

Looking for solutions i found that the version 2 of [SJMS2](https://camel.apache.org/components/2.x/sjms2-component.html)
support batch transactions, i leave the sample code, i hope help you.

[batch-sjms2-oaq-camel](https://github.com/T0modachi/batch-sjms2-oaq-camel)
