/*The count-and-say sequence is the sequence of integers beginning as follows:
1, 11, 21, 1211, 111221, ...

1 is read off as "one 1" or 11.
11 is read off as "two 1s" or 21.
21 is read off as "one 2, then one 1" or 1211.
Given an integer n, generate the nth sequence.

Note: The sequence of integers will be represented as a string.*/
/**
 * @param {number} n
 * @return {string}
 */
        var countAndSay = function (n) {
            var b = "1";
            for (var j = 1; j < n; j++) {
                var a = "";
                var count = 1;
                for (var i = 0; i < b.length; i++) {
                    var s = b.charAt(i);
                    if (i + 1 == b.length) {
                        a = a + count + s + '';
                    } else if (b.charAt(i + 1) == s) {
                        count++;
                    } else {
                        a = a + count + s + "";
                        count = 1;
                    }
                }
                b = a;
            }
            return b;
        };