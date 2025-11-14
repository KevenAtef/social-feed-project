import React, { useState } from 'react';
import { Heart, MessageCircle, Share2, Bookmark, MoreHorizontal, Search, TrendingUp, Home, Bell, User, Send, Image, X, Moon, Sun } from 'lucide-react';

const SocialFeed = () => {
  const [activeTab, setActiveTab] = useState('home');
  const [searchQuery, setSearchQuery] = useState('');
  const [showNewPost, setShowNewPost] = useState(false);
  const [newPostText, setNewPostText] = useState('');
  const [darkMode, setDarkMode] = useState(false);
  
  const [posts, setPosts] = useState([
    {
      id: 1,
      author: 'أحمد محمود',
      username: '@ahmed_dev',
      avatar: '👨‍💻',
      time: 'منذ ساعتين',
      content: 'تعلمت اليوم شيء جديد في React! الـ Custom Hooks غيرت حياتي تماماً. مين جرب يستخدمها قبل كده؟',
      image: null,
      likes: 124,
      comments: 18,
      shares: 5,
      liked: false,
      bookmarked: false,
      tags: ['#React', '#JavaScript', '#WebDev']
    },
    {
      id: 2,
      author: 'سارة علي',
      username: '@sara_designer',
      avatar: '👩‍🎨',
      time: 'منذ 4 ساعات',
      content: 'شاركت اليوم تصميمي الجديد لتطبيق موبايل. إيه رأيكم؟ 🎨✨',
      image: '🎨',
      likes: 342,
      comments: 45,
      shares: 23,
      liked: true,
      bookmarked: false,
      tags: ['#UI', '#Design', '#Mobile']
    },
    {
      id: 3,
      author: 'محمد حسن',
      username: '@mohammed_tech',
      avatar: '🧑‍💼',
      time: 'منذ 6 ساعات',
      content: 'نصيحة للمبرمجين المبتدئين: لا تخاف من الأخطاء! كل error هو فرصة للتعلم. استمروا وما تستسلموش! 💪',
      image: null,
      likes: 567,
      comments: 89,
      shares: 112,
      liked: true,
      bookmarked: true,
      tags: ['#Programming', '#Motivation']
    },
    {
      id: 4,
      author: 'فاطمة أحمد',
      username: '@fatma_coder',
      avatar: '👩‍💻',
      time: 'منذ 8 ساعات',
      content: 'بعد 3 شهور من التعلم، أخيراً عملت أول مشروع كامل! Portfolio + E-commerce 🎉',
      image: '💻',
      likes: 892,
      comments: 156,
      shares: 67,
      liked: false,
      bookmarked: true,
      tags: ['#Achievement', '#WebDev', '#FirstProject']
    }
  ]);

  const trendingTopics = [
    { tag: '#React', posts: '12.5K' },
    { tag: '#JavaScript', posts: '8.3K' },
    { tag: '#WebDev', posts: '6.7K' },
    { tag: '#CSS', posts: '5.2K' },
    { tag: '#Programming', posts: '4.8K' }
  ];

  const suggestions = [
    { name: 'عمر سعيد', username: '@omar_tech', avatar: '👨‍🔬', bio: 'Full Stack Developer' },
    { name: 'نور الدين', username: '@nour_dev', avatar: '🧑‍💻', bio: 'Frontend Engineer' },
    { name: 'ليلى كمال', username: '@layla_ui', avatar: '👩‍🎨', bio: 'UI/UX Designer' }
  ];

  const handleLike = (postId) => {
    setPosts(posts.map(post => {
      if (post.id === postId) {
        return {
          ...post,
          liked: !post.liked,
          likes: post.liked ? post.likes - 1 : post.likes + 1
        };
      }
      return post;
    }));
  };

  const handleBookmark = (postId) => {
    setPosts(posts.map(post => {
      if (post.id === postId) {
        return { ...post, bookmarked: !post.bookmarked };
      }
      return post;
    }));
  };

  const handleNewPost = () => {
    if (newPostText.trim()) {
      const newPost = {
        id: posts.length + 1,
        author: 'أنت',
        username: '@you',
        avatar: '😊',
        time: 'الآن',
        content: newPostText,
        image: null,
        likes: 0,
        comments: 0,
        shares: 0,
        liked: false,
        bookmarked: false,
        tags: []
      };
      setPosts([newPost, ...posts]);
      setNewPostText('');
      setShowNewPost(false);
    }
  };

  const filteredPosts = posts.filter(post => 
    post.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900' : 'bg-gray-50'} transition-colors duration-300`} dir="rtl">
      <header className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} border-b sticky top-0 z-50 transition-colors duration-300`}>
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-8">
              <h1 className="text-2xl font-bold text-blue-600">تواصل</h1>
              <nav className="hidden md:flex gap-6">
                <button 
                  onClick={() => setActiveTab('home')}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg transition ${activeTab === 'home' ? 'bg-blue-50 text-blue-600' : `${darkMode ? 'text-gray-400 hover:bg-gray-700' : 'text-gray-600 hover:bg-gray-100'}`}`}
                >
                  <Home size={20} />
                  الرئيسية
                </button>
                <button 
                  onClick={() => setActiveTab('trending')}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg transition ${activeTab === 'trending' ? 'bg-blue-50 text-blue-600' : `${darkMode ? 'text-gray-400 hover:bg-gray-700' : 'text-gray-600 hover:bg-gray-100'}`}`}
                >
                  <TrendingUp size={20} />
                  الترندات
                </button>
                <button 
                  onClick={() => setActiveTab('notifications')}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg transition ${activeTab === 'notifications' ? 'bg-blue-50 text-blue-600' : `${darkMode ? 'text-gray-400 hover:bg-gray-700' : 'text-gray-600 hover:bg-gray-100'}`}`}
                >
                  <Bell size={20} />
                  الإشعارات
                </button>
              </nav>
            </div>
            <div className="flex items-center gap-4">
              <div className="relative">
                <Search className={`absolute right-3 top-1/2 -translate-y-1/2 ${darkMode ? 'text-gray-500' : 'text-gray-400'}`} size={18} />
                <input
                  type="text"
                  placeholder="ابحث..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className={`pr-10 pl-4 py-2 rounded-full border-0 outline-none w-64 transition-colors duration-300 ${darkMode ? 'bg-gray-700 text-gray-100 focus:bg-gray-600 focus:ring-2 focus:ring-blue-500' : 'bg-gray-100 focus:bg-white focus:ring-2 focus:ring-blue-500'}`}
                />
              </div>
              <button 
                onClick={() => setDarkMode(!darkMode)}
                className={`p-2 rounded-full transition ${darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}`}
              >
                {darkMode ? <Sun size={24} className="text-yellow-400" /> : <Moon size={24} className="text-gray-600" />}
              </button>
              <button className={`p-2 rounded-full transition ${darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}`}>
                <User size={24} className={darkMode ? 'text-gray-400' : 'text-gray-600'} />
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-8">
            {!showNewPost ? (
              <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-xl shadow-sm p-4 mb-6 transition-colors duration-300`}>
                <button 
                  onClick={() => setShowNewPost(true)}
                  className={`w-full text-right px-4 py-3 rounded-lg transition ${darkMode ? 'bg-gray-700 text-gray-400 hover:bg-gray-600' : 'bg-gray-100 text-gray-500 hover:bg-gray-200'}`}
                >
                  شارك شيئاً جديداً...
                </button>
              </div>
            ) : (
              <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-xl shadow-sm p-4 mb-6 transition-colors duration-300`}>
                <div className="flex items-start gap-3 mb-4">
                  <div className="text-3xl">😊</div>
                  <textarea
                    value={newPostText}
                    onChange={(e) => setNewPostText(e.target.value)}
                    placeholder="ما الذي تفكر فيه؟"
                    className={`flex-1 p-3 border rounded-lg resize-none focus:ring-2 focus:ring-blue-500 outline-none transition-colors duration-300 ${darkMode ? 'bg-gray-700 border-gray-600 text-gray-100 placeholder-gray-400' : 'border-gray-300'}`}
                    rows="3"
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex gap-2">
                    <button className={`p-2 rounded-lg transition ${darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}`}>
                      <Image size={20} className={darkMode ? 'text-gray-400' : 'text-gray-600'} />
                    </button>
                  </div>
                  <div className="flex gap-2">
                    <button 
                      onClick={() => setShowNewPost(false)}
                      className={`px-4 py-2 rounded-lg transition ${darkMode ? 'text-gray-400 hover:bg-gray-700' : 'text-gray-600 hover:bg-gray-100'}`}
                    >
                      إلغاء
                    </button>
                    <button 
                      onClick={handleNewPost}
                      className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                    >
                      نشر
                    </button>
                  </div>
                </div>
              </div>
            )}

            <div className="space-y-6">
              {filteredPosts.map(post => (
                <div key={post.id} className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-all duration-300`}>
                  <div className="p-4 flex items-start justify-between">
                    <div className="flex items-start gap-3">
                      <div className="text-3xl">{post.avatar}</div>
                      <div>
                        <h3 className={`font-bold ${darkMode ? 'text-gray-100' : 'text-gray-800'}`}>{post.author}</h3>
                        <p className={`text-sm ${darkMode ? 'text-gray-500' : 'text-gray-500'}`}>{post.username} • {post.time}</p>
                      </div>
                    </div>
                    <button className={`p-2 rounded-full transition ${darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}`}>
                      <MoreHorizontal size={20} className={darkMode ? 'text-gray-500' : 'text-gray-500'} />
                    </button>
                  </div>

                  <div className="px-4 pb-3">
                    <p className={`leading-relaxed mb-2 ${darkMode ? 'text-gray-100' : 'text-gray-800'}`}>{post.content}</p>
                    <div className="flex gap-2">
                      {post.tags.map((tag, idx) => (
                        <span key={idx} className="text-blue-600 text-sm hover:underline cursor-pointer">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {post.image && (
                    <div className="px-4 pb-3">
                      <div className={`rounded-lg h-64 flex items-center justify-center text-6xl ${darkMode ? 'bg-gradient-to-br from-gray-700 to-gray-600' : 'bg-gradient-to-br from-blue-100 to-purple-100'}`}>
                        {post.image}
                      </div>
                    </div>
                  )}

                  <div className={`px-4 py-2 border-t border-b flex items-center justify-between text-sm ${darkMode ? 'border-gray-700 text-gray-500' : 'border-gray-200 text-gray-500'}`}>
                    <span>{post.likes} إعجاب</span>
                    <div className="flex gap-4">
                      <span>{post.comments} تعليق</span>
                      <span>{post.shares} مشاركة</span>
                    </div>
                  </div>

                  <div className="px-4 py-3 flex items-center justify-around">
                    <button 
                      onClick={() => handleLike(post.id)}
                      className={`flex items-center gap-2 px-4 py-2 rounded-lg transition ${post.liked ? 'text-red-600' : `${darkMode ? 'text-gray-400 hover:bg-gray-700' : 'text-gray-600 hover:bg-gray-100'}`}`}
                    >
                      <Heart size={20} fill={post.liked ? 'currentColor' : 'none'} />
                      <span className="font-medium">إعجاب</span>
                    </button>
                    <button className={`flex items-center gap-2 px-4 py-2 rounded-lg transition ${darkMode ? 'text-gray-400 hover:bg-gray-700' : 'text-gray-600 hover:bg-gray-100'}`}>
                      <MessageCircle size={20} />
                      <span className="font-medium">تعليق</span>
                    </button>
                    <button className={`flex items-center gap-2 px-4 py-2 rounded-lg transition ${darkMode ? 'text-gray-400 hover:bg-gray-700' : 'text-gray-600 hover:bg-gray-100'}`}>
                      <Share2 size={20} />
                      <span className="font-medium">مشاركة</span>
                    </button>
                    <button 
                      onClick={() => handleBookmark(post.id)}
                      className={`p-2 rounded-lg transition ${post.bookmarked ? 'text-blue-600' : `${darkMode ? 'text-gray-400 hover:bg-gray-700' : 'text-gray-600 hover:bg-gray-100'}`}`}
                    >
                      <Bookmark size={20} fill={post.bookmarked ? 'currentColor' : 'none'} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-4 space-y-6">
            <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-xl shadow-sm p-4 transition-colors duration-300`}>
              <h3 className={`font-bold mb-4 ${darkMode ? 'text-gray-100' : 'text-gray-800'}`}>الترندات الآن</h3>
              <div className="space-y-4">
                {trendingTopics.map((topic, idx) => (
                  <div key={idx} className={`p-2 rounded-lg cursor-pointer transition ${darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-50'}`}>
                    <p className={`font-semibold ${darkMode ? 'text-gray-100' : 'text-gray-800'}`}>{topic.tag}</p>
                    <p className={`text-sm ${darkMode ? 'text-gray-500' : 'text-gray-500'}`}>{topic.posts} منشور</p>
                  </div>
                ))}
              </div>
            </div>

            <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-xl shadow-sm p-4 transition-colors duration-300`}>
              <h3 className={`font-bold mb-4 ${darkMode ? 'text-gray-100' : 'text-gray-800'}`}>اقتراحات المتابعة</h3>
              <div className="space-y-4">
                {suggestions.map((user, idx) => (
                  <div key={idx} className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="text-2xl">{user.avatar}</div>
                      <div>
                        <p className={`font-semibold text-sm ${darkMode ? 'text-gray-100' : 'text-gray-800'}`}>{user.name}</p>
                        <p className={`text-xs ${darkMode ? 'text-gray-500' : 'text-gray-500'}`}>{user.username}</p>
                        <p className={`text-xs ${darkMode ? 'text-gray-600' : 'text-gray-400'}`}>{user.bio}</p>
                      </div>
                    </div>
                    <button className="px-4 py-1 bg-blue-600 text-white text-sm rounded-full hover:bg-blue-700 transition">
                      متابعة
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialFeed;