
# 1.
# print(3+4*2)

# 2.
# s="123"
# s2=int(s)
# print(type(s2))

# 3.
# print(2**10)

# 4.
# num=15
# s='偶数' if num%2==0 else '奇数'
# print(s)

# 5.
# print(17//3)
# print(17%3)

# 6.
# num=255
# print(bin(num))
# print(oct(num))
# print(hex(num))

# 7.
# print(abs(-100))

# 8.
# print(8<<3)

# 9.
# print(max(3, 7, 2))
# print(min(3, 7, 2))
# print('max' if max(3, 7, 2)>min(3, 7, 2) else 'min')

# 10.
# print(divmod(10,3))

# 11.
# print(1.2+3.4)

# 12.
# num = 3.14159
# round = round(num, 2)
# print(round)

# 13.
# print(int(5.7))

# 14.
# print(0.1+0.2) #0.30000000000000004
#原因：原理是由二进制代码相加转成十进制，所以有一定偏差

#15.
# num=9.8765
# round=round(num,3)
# print(round)

#16.
# print(pow((9.8 ** 0.5),2))

# 17.
# print(float(5e3))

# 18.
# s="123.45"
# print(type(float(s)))

# 19.
# print(7.5//2.5)

# 20.
# print("Hello"+"World")

# 21.
# s="Python"
# print(s[-2])

# 22.
# s="abcdefg"
# print(s[1:5])

# 23.
# s="hello world"
# print(s.title())

# 24.
# s="apple,banana,cherry"
# list=s.split(',')
# print(list)

# 25.
# s="12345"
# print(s[::-1])

#26.
# s="Mississippi"
# print(s.count('s'))

# 27.
# s="12345"
# print(s.isdigit())

# 28.
# name="Alice"
# age=25
# print(f"%s,%d"%(name,age))

# 29.
# s=" Hello "
# print(s.strip())


# k1
# ipt=int(input("请输入一个整数！"))
# print('正数' if ipt>0 else '为零' if ipt==0 else '负数')

# k2
# ipt=int(input("请输入一个数！"))
# print('偶数' if ipt%2==0 else '奇数')

#k3
# nums = [1, 3, 5, 7, 9]
# for i in nums:
#     print(i)

# k4
# num=0
# for i in range(1,101):
#     num+=i
# print(num)

# k5
# ipt=int(input('请输入一个数字：'))
# num=0
# for i in range(1,ipt):
#     if ipt%i==0:
#         num+=1

# print('质数' if num==1 else '非质数')

# k6
# for i in range(1,10):
#     for j in range(1,i+1):
#         print(f"%d×%d=%d\t"%(j,i,i*j),end="")
#     print('')

# k7
# def fibonacci(n):
#     if n == 0:
#         return 0
#     elif n == 1:
#         return 1
#     else:
#         return fibonacci(n-1) + fibonacci(n-2)

# sum_total = 0
# for i in range(20):
#     sum_total += fibonacci(i)

# print("斐波那契数列前20项之和为:", sum_total)

# k8
# ipt=int(input('请输入一串数字：'))
# s=str(ipt)
# print(int(s[::-1]))

# k9
# ipt = input("请输入一个字符串：")
# letters = 0
# digits = 0
# others = 0
# for char in ipt:
#     if char.isalpha():
#         letters += 1
#     elif char.isdigit():
#         digits += 1
#     else:
#         others += 1

# print(f"字母数量：{letters}")
# print(f"数字数量：{digits}")
# print(f"其他字符数量：{others}")  

#k10
# import random

# radom=random.randint(1,100)
# for i in range(5):
#     ipt=int(input("请输入整数："))
#     if ipt>radom:
#         print("猜大了")
    
#     elif ipt==radom:
#         print("猜小了")

#     else:
#         print("猜中了！")
#         break


# k11

# n = int(input("请输入一个整数 n："))

# rows_upper = (n + 1) // 2

# for i in range(1, rows_upper + 1):
#     spaces = rows_upper - i
#     print(" " * spaces, end="")
#     print("*" * (2 * i - 1))

# for i in range(rows_upper - 1, 0, -1):
#     spaces = rows_upper - i
#     print(" " * spaces, end="")
#     print("*" * (2 * i - 1))

# K12
# arr=[1, 2,3,3, 2, 4, 1,1, 5]

# def run(arr):
#     narr=[]
#     for i in arr:
#         if i in narr:
#             continue
#         else:
#             narr.append(i)
#     return narr

# print(run(arr))

# k13
# num1 = int(input("请输入第一个数："))
# num2 = int(input("请输入第二个数："))

# def gcd(a, b):
#     while b != 0:
#         a, b = b, a % b
#     return a

# result = gcd(num1, num2)
# print(f"{num1} 和 {num2} 的最大公约数是：{result}")


# k14
# import re

# ipt=input("请输入字符：")

# def run(ipt):
#     if len(ipt)<8:
#         print("长度不正确！")
#     elif not re.search(r'[A-Za-z]',ipt):
#         print("密码不包含字母！")
    
#     elif not re.search(r"\d",ipt):
#         print("密码不包含数字！")

#     else:
#         print("密码正确！")

# run(ipt)

# k15
# year=int(input("请输入年份："))

# def run(year):
#     if year%4==0 and year%100!=0 or year%400==0:
#         print("闰年")
#     else:
#         print("平年")

# run(year)

# k16
# arr=[5, 3, 8, 6, 7, 2]

# def run(arr):
#     temp=""
#     for i in arr:
#         for j in range(len(arr)):
#             if(j<len(arr)-1):
#                 if arr[j]>arr[j+1]:
#                     temp=arr[j]
#                     arr[j]=arr[j+1]
#                     arr[j+1]=temp
#     return arr

# print(run(arr))


# k17
# def run():
#     arr=[]
#     for i in range(10,50):
#         b=True
#         for j in range(2,i):
#             if i%j==0:
#                 b=False
#                 continue
#         if b:
#             arr.append(i)
#     return arr
            
# print(run())

# k18
# n=7

# def run(n):
#     for i in range(n):

#         for k in range(n-i):
#             print(" ",end="")

#         for j in range((i+1)*2-1):
#             print(((i+1)*2-1)-j if j>((i+1)*2-1)/2 else j+1,end="")
#         print()

# run(n)


# k19
# qian=10000

# ipt=float(input("请输入金额："))

# if qian-ipt>=0:
#     qian-=ipt
#     print(f"取钱成功！剩余余额:{qian}")
# else:
#     print("余额不足！")

# k20

# for i in range(1000000):
#     if 1.5*10+1==i:
#         print(i)

# s="123.45"
# print(type(float(s)))


# num1 = int(input("请输入第一个数："))
# num2 = int(input("请输入第二个数："))

# def gcd(a, b):
#     num=""
#     for i in range(1,min(a,b)+1):
#         if a%i==0 and b%i==0:
#             num=i
#     return num

# result = gcd(num1, num2)
# print(f"{num1} 和 {num2} 的最大公约数是：{result}")


# name="Alice"
# age=25
# print(f"%s,%d"%(name,age))

# s="apple,banana,cherry"
# list=s.split(',')
# print(list)

# try:
#     ipt=int(input("请输入一个整数！"))
#     print('正数' if ipt>0 else '为零' if ipt==0 else '负数')
# except:
#     print("输入不合法！")


# i=0
# while True:
#     i+=1
#     if i%1.5==1 and i//1.5==10:
#         print(i)
#         break


# 算法1
# num = 1

# for day in range(9, 0, -1):
#     num = (num + 1) * 2

# print(f"第一天摘的桃子数量为: {num}")

# # 算法2
# i=0
# while True:
#     i+=1
#     if i%1.5==1 and i//1.5==10:
#         print(f"第一天摘的桃子数量为: {i}")
#         break

# # 方法2
# n=20

# a=0
# b=1
# arr=[a,b]
# for i in range(1,n):
#     c=a+b
#     a=b
#     b=c
#     arr.append(c)

# print(arr)

# num=0
# for j in arr:
#     num+=j
# print(num)


# def fibonacci(n):
#     if n == 0:
#         return 0
#     elif n == 1:
#         return 1
#     else:
#         return fibonacci(n-1) + fibonacci(n-2)

# sum_total = 0
# for i in range(21):
#     sum_total += fibonacci(i)

# print(sum_total)


# ------------------------------------
# import json
# from pathlib import Path 

# script_dir = Path(__file__).parent  # __file__ 是当前脚本的路径
# file_path = script_dir / "data.json"  # 拼接路径

# try:
#     # 检查文件是否存在
#     if not file_path.exists():
#         raise FileNotFoundError(f"文件 {file_path} 不存在")
    
#     # 以读取模式打开文件
#     with open(file_path, 'r', encoding='utf-8') as file:
#         data = json.load(file)  # 解析JSON数据
#         print("成功读取JSON数据：")
#         print(data)

# except FileNotFoundError as e:
#     print(f"错误：{e}")
# except json.JSONDecodeError:
#     print(f"错误：{file_path} 不是有效的JSON文件")
# except PermissionError:
#     print(f"错误：没有权限访问 {file_path}")
# except Exception as e:
#     print(f"发生未知错误：{e}")
# --------------------------------------------------

import json
import os

# 获取当前工作目录
current_dir = os.getcwd()
file_path = os.path.join(current_dir, 'data.json')  # 拼接路径

try:
    with open(file_path, 'r', encoding='utf-8') as file:
        data = json.load(file)
        print("成功读取JSON数据：")
        print(data)
except FileNotFoundError:
    print(f"错误：文件 '{file_path}' 不存在")
except json.JSONDecodeError as e:
    print(f"JSON解析错误：{e}")
except Exception as e:
    print(f"发生未知错误：{e}")

