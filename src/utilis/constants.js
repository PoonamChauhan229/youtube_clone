const API_Key = "AIzaSyA9LK-lPhJSJuK9WdnZqBlaC_5oxQyxeMo";
export const YOUTUBE_VIDEOS_API = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=${API_Key}`;

export const YOUTUBE_SEARCH_API = 'http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=';

export const LIVE_CHAT_COUNT = 25;

export const YOUTUBE_SEARCH_SHOWVIDEO_API=`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&key=${API_Key}&q=`
// https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&key=AIzaSyA9LK-lPhJSJuK9WdnZqBlaC_5oxQyxeMo&q=%22poonam%22

// https://youtube.googleapis.com/youtube/v3/search?&maxResults=10&key=AIzaSyA9LK-lPhJSJuK9WdnZqBlaC_5oxQyxeMo