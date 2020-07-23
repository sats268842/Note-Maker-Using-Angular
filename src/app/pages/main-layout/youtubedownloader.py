from pytube import YouTube
link = input('link to youtube video: \n')
yt = Youtube(link).streams.get_highest_resolution().download()
yt.streams.first().download()
print('downloaded', link)

