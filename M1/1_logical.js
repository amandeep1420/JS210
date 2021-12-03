(false && undefined); // returns the first operand if both are falsey, so false
(false || undefined); // returns the second operand if both are falsey, so undefined
((false && undefined) || (false || undefined)); // undefined
((false || undefined) || (false && undefined)); // wrong - false
((false && undefined) && (false || undefined)); // false
((false || undefined) && (false && undefined)); // undefined
('a' || (false && undefined) || ''); // 'a'
((false && undefined) || 'a' || ''); // 'a'
('a' && (false || undefined) && ''); // undefined....um....
((false || undefined) && 'a' && ''); // undefined...these rules are odd

// the return value of a logical expression can be determined by iteratively 
// evaluating the expression from left to right until it results in a single value