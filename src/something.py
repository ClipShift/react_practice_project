import time




def recycle():
    f = open('./result.txt', 'r+')
    data = f.read()
    f.seek(0)
    f.write('rec')
    f.truncate
    f.close

def bio():
    f = open('./result.txt', 'r+')
    data = f.read()
    f.seek(0)
    f.write('bio')
    f.truncate
    f.close


bio()
time.sleep(2)
recycle()
time.sleep(2)
bio()
time.sleep(2)
recycle()
time.sleep(2)
bio()
time.sleep(2)
recycle()
time.sleep(2)
bio()
time.sleep(2)
recycle()
time.sleep(2)
bio()
time.sleep(2)
recycle()
time.sleep(2)
bio()
time.sleep(2)
recycle()
time.sleep(2)

