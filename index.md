# Problem  Solving
Guide on problem solving techniques

## Exhaustive Search

Tries all possible candidate solutions until an answer is found. A naive, brute-force approach will not perform efficiently and complexity
can grow exponentially, making it hard for computers to process.


Example: [https://leetcode.com/problems/magic-squares-in-grid][Magic Square Puzzle]

[Magic Square Puzzle]: https://leetcode.com/problems/magic-squares-in-grid

## Backtracking
Backtracking improves the concept of exhaustive search by avoiding the creation of unnecessary candidate solutions. This 
is achieved by going back to the point before the problem's constraints were still valid, then a next "branch" for our solution
can be created from that point.

Backtracking is an important improvement over the brute-force approach of exhaustive search. It provides a convenient method for generating candidate solutions while making it possible to avoid generating unnecessary candidates. The main idea is to construct solutions one component at a time and evaluate such partially constructed candidates as follows: If a partially constructed solution can be developed further without violating the problem’s constraints, it is done by taking the first remaining legitimate option for the next component. If there is no legitimate option for the next component, no alternatives for any remaining component need to be considered. In this case, the algorithm backtracks to replace the last component of the partially constructed solution with the next option for that component.

###Problem instances:

- n-Queens https://leetcode.com/problems/n-queens/
- Permutations https://leetcode.com/problems/permutations/
- Generate Parenthesis https://leetcode.com/problems/generate-parentheses/

## Transform and conquer

The transform-and-conquer is a well-known approach to problem solving that is based on the idea of transformation. 
A problem is solved in two stages. First, in the transformation stage, it is modified or transformed into another problem that, 
for one reason or another, is more amenable to solution. Then, in the second, conquering stage, it is solved. 

In our realm of algorithmic problem solving, one can identify three varieties of this strategy. The first variety—called 
instance simplification—solves a problem by first transforming an instance given into another instance of the same 
problem with some special property that makes the problem easier to solve. The second variety—called representation 
change—is based on the transformation of a problem’s input to a different representation that is more conducive to an 
efficient algorithmic solution. The third variety of the transformation strategy is problem reduction, in which an 
instance of a given problem is transformed into an instance of a different problem altogether.

As our first example, let us consider a puzzle-like problem from Jon Bentley’s book Programming Pearls [Ben00, pp. 15–16].

###Problem Instances