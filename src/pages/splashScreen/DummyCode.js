export const Snippets = [
  {"Snippet": `
function fibonacci(n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}
console.log(fibonacci(10));`},

  {"Snippet": `
  import { useState, useEffect } from "react";
  import { useAnimation } from "framer-motion";
  import { motion } from "framer-motion";
  import { cn } from "../../utils/cn.ts";
  
  import { Snippets } from "./DummyCode.js";
  
  const SplashScreen = ({ text, className, showSplash }) => {
      const [randomString, setRandomString] = useState("");
  
      let itr = 250;
      useEffect(() => {
          if (showSplash) {
              let intervalId = setInterval(() => {
                  let str = generateRandomString(25000);
                  setRandomString(str);
              }, itr);
  
              let initialStr = generateRandomString(25000);
              setRandomString(initialStr);
  
              return () => clearInterval(intervalId);
          }
      }, [showSplash]);
  
      return (
          <div
              className={cn(
                  "p-0.5 bg-black flex items-center justify-center w-full h-full absolute overflow-hidden",
                  className
              )}
          >
              <CardPattern randomString={randomString} showSplash={showSplash} />
          </div>
      );
  };
  
  export default SplashScreen;
  
  export const generateRandomString = (length) => {
      let result = "";
      while (result.length < length) {
          const randomSnippet = Snippets[Math.floor(Math.random() * Snippets.length)].Snippet;
          result += randomSnippet + " ";
      }
      return result.slice(0, length);
  };
  
  const CardPattern = ({ randomString, showSplash }) => {
      const controls = useAnimation();
  
      useEffect(() => {
          if (showSplash) {
              controls.start({
                  backgroundImage: [
                      'radial-gradient(circle at 50% 50%, rgb(13, 10, 28) 1%, rgba(128, 0, 128, 0) 20%)',
                      'radial-gradient(circle at 50% 50%, rgb(13, 10, 28) 100%, rgba(128, 0, 128, 0) 110%)',
                  ],
                  transition: { duration: 3, repeat: Infinity, repeatType: "reverse" },
              });
          } else {
              controls.stop();
          }
      }, [showSplash, controls]);
  
      return (
          <div className="pointer-events-none relative w-full h-full">
              <motion.div
                  className="absolute inset-0 rounded-2xl transition duration-500"
                  animate={controls}
              />
              <motion.div
                  className="absolute inset-0 rounded-2xl mix-blend-overlay transition duration-500"
              >
                  <p className="absolute inset-x-0 text-xs h-full break-words whitespace-pre-wrap text-white font-mono font-bold">
                      {randomString}
                  </p>
              </motion.div>
          </div>
      );
  };
  `},

  {"Snippet": `
def quicksort(arr):
    if len(arr) <= 1:
        return arr
    pivot = arr[len(arr) // 2]
    left = [x for x in arr if x < pivot]
    middle = [x for x in arr if x == pivot]
    right = [x for x in arr if x > pivot]
    return quicksort(left) + middle + quicksort(right)
print(quicksort([3,6,8,10,1,2,1]))`},

  {"Snippet": `
#include <iostream>
using namespace std;

void swap(int *xp, int *yp) {
    int temp = *xp;
    *xp = *yp;
    *yp = temp;
}

void bubbleSort(int arr[], int n) {
    int i, j;
    for (i = 0; i < n-1; i++)
        for (j = 0; j < n-i-1; j++)
            if (arr[j] > arr[j+1])
                swap(&arr[j], &arr[j+1]);
}

int main() {
    int arr[] = {64, 34, 25, 12, 22, 11, 90};
    int n = sizeof(arr)/sizeof(arr[0]);
    bubbleSort(arr, n);
    cout << "Sorted array: ";
    for (int i=0; i < n; i++)
        cout << arr[i] << " ";
    return 0;
}`},

  {"Snippet": `
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.listen(port, () => {
  console.log(\`Example app listening at http://localhost:\${port}\`)
});`},

  {"Snippet": `
import java.util.Scanner;

public class Factorial {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.println("Enter a number: ");
        int num = scanner.nextInt();
        int result = 1;
        for (int i = 1; i <= num; i++) {
            result *= i;
        }
        System.out.println("Factorial of " + num + " is " + result);
    }
}`},

  {"Snippet": `
def bubble_sort(arr):
    n = len(arr)
    for i in range(n):
        for j in range(0, n-i-1):
            if arr[j] > arr[j+1]:
                arr[j], arr[j+1] = arr[j+1], arr[j]
    return arr

print(bubble_sort([64, 34, 25, 12, 22, 11, 90]))`},

  {"Snippet": `
#include <iostream>
#include <vector>
using namespace std;

vector<int> twoSum(vector<int>& nums, int target) {
    for (int i = 0; i < nums.size(); i++) {
        for (int j = i + 1; j < nums.size(); j++) {
            if (nums[i] + nums[j] == target) {
                return {i, j};
            }
        }
    }
    return {};
}

int main() {
    vector<int> nums = {2, 7, 11, 15};
    int target = 9;
    vector<int> result = twoSum(nums, target);
    for (int i : result)
        cout << i << " ";
    return 0;
}`},

  {"Snippet": `
const http = require('http');

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\\n');
});

server.listen(3000, '127.0.0.1', () => {
  console.log('Server running at http://127.0.0.1:3000/');
});`},

  {"Snippet": `
import java.util.LinkedList;
import java.util.Queue;

public class BinaryTreeLevelOrderTraversal {
    static class TreeNode {
        int val;
        TreeNode left, right;
        TreeNode(int val) {
            this.val = val;
            left = right = null;
        }
    }

    public void levelOrder(TreeNode root) {
        if (root == null)
            return;

        Queue<TreeNode> queue = new LinkedList<>();
        queue.add(root);

        while (!queue.isEmpty()) {
            TreeNode tempNode = queue.poll();
            System.out.print(tempNode.val + " ");

            if (tempNode.left != null) {
                queue.add(tempNode.left);
            }

            if (tempNode.right != null) {
                queue.add(tempNode.right);
            }
        }
    }

    public static void main(String args[]) {
        BinaryTreeLevelOrderTraversal tree = new BinaryTreeLevelOrderTraversal();
        TreeNode root = new TreeNode(1);
        root.left = new TreeNode(2);
        root.right = new TreeNode(3);
        root.left.left = new TreeNode(4);
        root.left.right = new TreeNode(5);
        System.out.println("Level order traversal of binary tree is ");
        tree.levelOrder(root);
    }
}`},

  {"Snippet": `
def merge_sort(arr):
    if len(arr) > 1:
        mid = len(arr) // 2
        L = arr[:mid]
        R = arr[mid:]

        merge_sort(L)
        merge_sort(R)

        i = j = k = 0

        while i < len(L) and j < len(R):
            if L[i] < R[j]:
                arr[k] = L[i]
                i += 1
            else:
                arr[k] = R[j]
                j += 1
            k += 1

        while i < len(L):
            arr[k] = L[i]
            i += 1
            k += 1

        while j < len(R):
            arr[k] = R[j]
            j += 1
            k += 1

arr = [12, 11, 13, 5, 6, 7]
merge_sort(arr)
print("Sorted array is: ", arr)`},

  {"Snippet": `
#include <iostream>
#include <stack>
#include <string>
using namespace std;

bool isValid(string s) {
    stack<char> stack;
    for (char c : s) {
        if (c == '(' || c == '{' || c == '[') {
            stack.push(c);
        } else {
            if (stack.empty()) return false;
            char top = stack.top();
            if ((c == ')' && top == '(') ||
                (c == '}' && top == '{') ||
                (c == ']' && top == '[')) {
                stack.pop();
            } else {
                return false;
            }
        }
    }
    return stack.empty();
}

int main() {
    string s = "()[]{}";
    cout << (isValid(s) ? "Valid" : "Invalid") << endl;
    return 0;
}`},

  {"Snippet": `
const fetch = require('node-fetch');

const getData = async () => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
};

getData();`},

  {"Snippet": `
import java.util.HashMap;
import java.util.Map;

public class Anagram {
    public static boolean isAnagram(String s, String t) {
        if (s.length() != t.length()) return false;
        Map<Character, Integer> count = new HashMap<>();
        for (char c : s.toCharArray()) {
            count.put(c, count.getOrDefault(c, 0) + 1);
        }
        for (char c : t.toCharArray()) {
            if (!count.containsKey(c) || count.get(c) == 0) return false;
            count.put(c, count.get(c) - 1);
        }
        return true;
    }

    public static void main(String[] args) {
        String s = "anagram";
        String t = "nagaram";
        System.out.println(isAnagram(s, t));
    }
}`},

  {"Snippet": `
def is_prime(n):
    if n <= 1:
        return False
    for i in range(2, int(n ** 0.5) + 1):
        if n % i == 0:
            return False
    return True

print(is_prime(29))`},

  {"Snippet": `
#include <iostream>
#include <vector>
using namespace std;

vector<int> findPrimes(int n) {
    vector<int> primes;
    vector<bool> isPrime(n + 1, true);
    for (int p = 2; p * p <= n; p++) {
        if (isPrime[p]) {
            for (int i = p * p; i <= n; i += p)
                isPrime[i] = false;
        }
    }
    for (int p = 2; p <= n; p++) {
        if (isPrime[p])
            primes.push_back(p);
    }
    return primes;
}

int main() {
    int n = 30;
    vector<int> primes = findPrimes(n);
    for (int prime : primes)
        cout << prime << " ";
    return 0;
}`},

  {"Snippet": `
const fs = require('fs');

fs.readFile('example.txt', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log(data);
});`},

  {"Snippet": `
import java.util.Arrays;

public class BinarySearch {
    public static int binarySearch(int[] arr, int x) {
        int l = 0, r = arr.length - 1;
        while (l <= r) {
            int m = l + (r - l) / 2;
            if (arr[m] == x)
                return m;
            if (arr[m] < x)
                l = m + 1;
            else
                r = m - 1;
        }
        return -1;
    }

    public static void main(String[] args) {
        int[] arr = {2, 3, 4, 10, 40};
        int x = 10;
        int result = binarySearch(arr, x);
        if (result == -1)
            System.out.println("Element not present");
        else
            System.out.println("Element found at index " + result);
    }
}`},

  {"Snippet": `
def binary_search(arr, x):
    l, r = 0, len(arr) - 1
    while l <= r:
        mid = l + (r - l) // 2
        if arr[mid] == x:
            return mid
        elif arr[mid] < x:
            l = mid + 1
        else:
            r = mid - 1
    return -1

arr = [2, 3, 4, 10, 40]
x = 10
result = binary_search(arr, x)
if result != -1:
    print("Element is present at index", result)
else:
    print("Element is not present in array")`},

  {"Snippet": `
#include <iostream>
using namespace std;

int factorial(int n) {
    if (n == 0)
        return 1;
    else
        return n * factorial(n - 1);
}

int main() {
    int num = 5;
    cout << "Factorial of " << num << " is " << factorial(num) << endl;
    return 0;
}`},

  {"Snippet": `
const axios = require('axios');

axios.get('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => {
        console.log(response.data);
    })
    .catch(error => {
        console.log(error);
    });`},

  {"Snippet": `
import java.util.Scanner;

public class Palindrome {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.println("Enter a string: ");
        String str = scanner.nextLine();
        String reversedStr = new StringBuilder(str).reverse().toString();
        if (str.equals(reversedStr)) {
            System.out.println("The string is a palindrome");
        } else {
            System.out.println("The string is not a palindrome");
        }
    }
}`},

  {"Snippet": `
def reverse_string(s):
    return s[::-1]

s = "hello"
print(reverse_string(s))`}
];
