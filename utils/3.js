/**
 * Quiz #9 - Alinz [eilinzi:]
Background
Text is composed with words and punctuations.

Words are made of 52 letters, including 26 captial letters and 26 small letters, and two types of punctuations, hyphen (-) and apostrophe (’).

The strength of a word is defined by firstly its length then its appeared time. When lengths of two words equal, the earlier appeared one is stronger.

Samples
Given the text below

It is said that the apple hit Newton's head rendered the enlightment of gravity but maybe it's just
a made-up story. His thoughts on "why should that apple always descend perpendicularly to the ground,
not go sideways nor upwards but constantly to the earth's center" might have persisted for a very long time.
Length(it) = Length(is) = 2, but considering it appeared before is, it is stronger than is.

Length(it's) = 4

Length(made-up) = 7

Length(hit) = Length(His) = 3, but considering hit appeared before His, hit is stronger than His.

An alinz is a special string for a given text that satisfies:

Every appeared word must have different leading letter
Each appared word must be the strongest one with that leading letter
It has as many words as possible
The words are arranged in dictionary order
Normally, Alinz is written in CamelCase. Therefore the alinz for the text above is supposed to be:

AlwaysButConstantlyDescendEnlightmentForGravityHeadIt'sJustLongMade-upNewton'sOfPerpendicularlyRenderedSidewaysThoughtsUpwardsVeryWhy
Question
Could you please build the alinz for This clip from Hamlet?

Please send your answer as mail content and code as an attachment in zip format to code@rippletek.com. It would be great if test code is included as well.

Please use standard library only as this is supposed to be a very simple program.

Thank you!

文字是由单词和标点符号组成的。

词语由52个字母组成，包括26个大写字母和26个小写字母，以及两种类型的标点，连字符（-）和撇号（'）。

一个词的强度首先由它的长度和它的出现时间决定。当两个词的长度相等时，较早出现的那个词就比较强。

Length(it) = Length(is) = 2，但考虑到它出现在is之前，它比is强。

长度（它的）= 4

长度（化妆）= 7

Length(hit) = Length(His) = 3, 但考虑到hit出现在His之前，hit比His强。

一个alinz是一个特殊的字符串，用于给定的文本，它满足以下条件。

每个出现的词都必须有不同的首字母
每个出现的词必须是具有该首字母的最强的词
它有尽可能多的词
这些词是按照字典的顺序排列的
通常情况下，Alinz是用CamelCase写的。因此，上面这段文字的alinz应该是。


It is said that the apple hit Newton's head rendered the enlightment of gravity but maybe it's just
a made-up story. His thoughts on "why should that apple always descend perpendicularly to the ground,
not go sideways nor upwards but constantly to the earth's center" might have persisted for a very long time.

======>

AlwaysButConstantlyDescendEnlightmentForGravityHeadIt'sJustLongMade-upNewton'sOfPerpendicularlyRenderedSidewaysThoughtsUpwardsVeryWhy
 */

const leadingLetter = (str) => {
    console.log('原始字符串', str);
}

const str = `It is said that the apple hit Newton's head rendered the enlightment of gravity but maybe it's just
a made-up story. His thoughts on "why should that apple always descend perpendicularly to the ground,
not go sideways nor upwards but constantly to the earth's center" might have persisted for a very long time.`

leadingLetter(str)