import React  from "react";
import Card from "./Card";

const Probset = () => {
    return (
        <div className="probset">
             <img src="/logo.png" alt="Logo" />
             <Card title="Array Manipulation" description="How to manipulate arrays efficiently." difficulty="Easy" solve ="https://neetcode.io/practice"/>
             <Card title="Two Pointers" description="Use the 2-pointer technique to easily solve array/string problems." difficulty="Easy" solve ="https://neetcode.io/practice"/>
             <Card title="Sliding Window" description="Use the sliding window technique to solve problems that involve tracking subarrays/substrings in a continuous data structure." difficulty="Easy" solve ="https://neetcode.io/practice"/>
             <Card title="Stacks" description="Learn how to use stacks for LIFO operations!" difficulty="Easy" solve ="https://neetcode.io/practice"/>
             <Card title="Queues" description="Learn how to use queues, a FIFO data structure, to manage tasks in sequence, often useful in scheduling and BFS algorithms." difficulty="Easy" solve ="https://neetcode.io/practice"/>
             <Card title="Binary Search" description="Use binary search to efficiently search through sorted data; an important algorithm for dividing the search space in half each step." difficulty="Medium" solve ="https://neetcode.io/practice"/>
             <Card title="Linked List" description="Work with linked lists, a linear data structure where elements point to the next, making it a dynamic structure for memory-efficient storage." difficulty="Medium" solve ="https://neetcode.io/practice"/>
             <Card title="Trees" description="Learn how to use trees, a hierarchical data structure." difficulty="Hard" solve ="https://neetcode.io/practice"/>
             <Card title="Graphs" description="Learn how to apply graph theory to solve problems that involve relationships between entities." difficulty="Hard" solve ="https://neetcode.io/practice"/>
        </div>
    )
}

export default Probset;