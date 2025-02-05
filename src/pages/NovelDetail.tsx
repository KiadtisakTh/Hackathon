import React, { useState, useRef, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Play, Pause, SkipBack, SkipForward, Volume2, Star, BookOpen, Clock, User, ChevronLeft, ChevronDown, ChevronUp } from 'lucide-react';
import { getNovelById } from '../data/novels';

export function NovelDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [volume, setVolume] = useState(1);
  const [currentChapter, setCurrentChapter] = useState(0);
  const [chapterNotes, setChapterNotes] = useState<{ [key: number]: string }>({});
  const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const novel = getNovelById(parseInt(id || '0'));

  // Mock chapter content data
  const chapters = [
    {
      id: 1,
      title: 'บทที่ 1: จุดเริ่มต้น',
      content: `ในคืนที่ดวงจันทร์เต็มดวง แสงสีเงินสาดส่องลงมายังตัวเมืองเก่าแก่แห่งนี้ เสียงลมพัดผ่านใบไม้ดังกรอบแกรบ สร้างบรรยากาศที่ชวนให้นึกถึงเรื่องราวโบราณ ณ มุมหนึ่งของเมือง มีร้านหนังสือเล็กๆ ที่ซ่อนตัวอยู่ในตรอกแคบ แสงไฟสลัวส่องผ่านหน้าต่างบานเก่า...

เอมิลี่ยืนอยู่หน้าชั้นหนังสือ นิ้วเรียวบางไล้ไปตามสันหนังสือเก่าๆ ฝุ่นจับตามร่องนิ้ว กลิ่นอายของกระดาษเก่าและหมึกพิมพ์ลอยอวลในอากาศ เธอรู้สึกถึงพลังบางอย่างที่แผ่ซ่านออกมาจากหนังสือเล่มหนึ่ง มันเรียกร้องให้เธอหยิบมันขึ้นมา...`,
      duration: '20:00',
      audioUrl: 'https://botnoi-dictionary.s3.amazonaws.com:443/b8e1606040b004decd4337636bc9324ee74e191ad00e7e8a90ca4a1f84083972_02052025093400335975.m4a'
    },
    {
      id: 2,
      title: 'บทที่ 2: การเดินทาง',
      content: `แสงอาทิตย์ยามเช้าสาดส่องผ่านหน้าต่างบานเล็ก เอมิลี่ลืมตาตื่นขึ้นมาพบว่าตัวเองนอนหลับอยู่บนโต๊ะในห้องสมุด หนังสือปริศนาเล่มนั้นวางอยู่ตรงหน้า หน้ากระดาษเปิดอ้าเผยให้เห็นแผนที่โบราณที่เธอไม่เคยเห็นมาก่อน

ลายเส้นสีทองบนแผนที่เริ่มเรืองแสง เส้นทางลึกลับปรากฏขึ้น นำไปสู่สถานที่ที่เธอไม่เคยรู้จัก เอมิลี่รู้ดีว่านี่คือจุดเริ่มต้นของการผจญภัยครั้งใหม่...`,
      duration: '18:30',
      audioUrl: 'https://example.com/chapter2.mp3'
    },
    {
      id: 3,
      title: 'บทที่ 3: การค้นพบ',
      content: `ป่าทึบตรงหน้าดูน่าขนลุก เสียงนกร้องแปลกๆ ดังมาจากที่ไกลๆ เอมิลี่กำแผนที่ในมือแน่น เธอรู้ว่าจุดหมายอยู่ไม่ไกล ตามแผนที่ระบุว่ามีวิหารโบราณซ่อนอยู่กลางป่าแห่งนี้

เธอเดินลึกเข้าไปในป่า ต้นไม้สูงใหญ่บดบังแสงอาทิตย์ ทำให้รอบข้างมืดสลัว แต่แสงสีทองจากแผนที่ยังคงนำทางเธอไป สัญชาตญาณบอกว่าเธอกำลังเข้าใกล้ความจริงบางอย่าง...`,
      duration: '22:15',
      audioUrl: 'https://example.com/chapter3.mp3'
    }
  ];

  if (!novel) {
    return (
      <div className="min-h-screen bg-gray-50 pt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900">ไม่พบนิยายที่คุณต้องการ</h1>
            <button
              onClick={() => navigate(-1)}
              className="mt-4 inline-flex items-center text-blue-600 hover:text-blue-700"
            >
              <ChevronLeft className="h-5 w-5 mr-1" />
              กลับไปหน้าที่แล้ว
            </button>
          </div>
        </div>
      </div>
    );
  }

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
    }
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const time = parseFloat(e.target.value);
    setCurrentTime(time);
    if (audioRef.current) {
      audioRef.current.currentTime = time;
    }
  };

  const handleNoteChange = (chapterId: number, note: string) => {
    setChapterNotes(prev => ({
      ...prev,
      [chapterId]: note
    }));
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  const toggleDescription = () => {
    setIsDescriptionExpanded(!isDescriptionExpanded);
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back button */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center text-gray-600 hover:text-gray-900 mb-6"
        >
          <ChevronLeft className="h-6 w-6" />
          <span>กลับ</span>
        </button>

        {/* Novel Info */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/3">
              <img
                src={novel.cover}
                alt={novel.title}
                className="w-full h-[400px] object-cover"
              />
            </div>
            <div className="md:w-2/3 p-6">
              <div className="flex items-center justify-between mb-4">
                <h1 className="text-3xl font-bold">{novel.title}</h1>
                <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
                  {novel.category}
                </span>
              </div>
              <div className="flex items-center text-gray-600 mb-4">
                <User className="h-5 w-5 mr-2" />
                <span>{novel.author}</span>
              </div>
              <div className="flex items-center space-x-6 mb-6">
                <div className="flex items-center">
                  <Star className="h-5 w-5 text-yellow-400 mr-1" />
                  <span>{novel.rating}/5.0</span>
                </div>
                <div className="flex items-center">
                  <BookOpen className="h-5 w-5 mr-1" />
                  <span>{novel.chapters} ตอน</span>
                </div>
                <div className="flex items-center">
                  <Clock className="h-5 w-5 mr-1" />
                  <span>{novel.views.toLocaleString()} views</span>
                </div>
              </div>
              
              {/* Collapsible Description */}
              <div className="border rounded-lg p-4 bg-gray-50">
                <button
                  onClick={toggleDescription}
                  className="flex items-center justify-between w-full text-left"
                >
                  <span className="font-semibold">เรื่องย่อ</span>
                  {isDescriptionExpanded ? (
                    <ChevronUp className="h-5 w-5" />
                  ) : (
                    <ChevronDown className="h-5 w-5" />
                  )}
                </button>
                {isDescriptionExpanded && (
                  <p className="text-gray-600 mt-4">{novel.description || 'ไม่มีคำอธิบายเพิ่มเติม'}</p>
                )}
              </div>
            </div>
          </div>

          {/* Audio Player */}
          <div className="bg-gray-900 text-white p-6">
            <audio
              ref={audioRef}
              onTimeUpdate={handleTimeUpdate}
              onEnded={() => setIsPlaying(false)}
              src={chapters[currentChapter].audioUrl}
            />
            <div className="flex items-center justify-between mb-4">
              <div className="flex-1">
                <h3 className="font-semibold">{chapters[currentChapter].title}</h3>
                <p className="text-sm text-gray-400">{novel.author}</p>
              </div>
              <div className="flex items-center space-x-2">
                <Volume2 className="h-5 w-5" />
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.1"
                  value={volume}
                  onChange={handleVolumeChange}
                  className="w-24"
                />
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setCurrentChapter(Math.max(0, currentChapter - 1))}
                className="p-2 hover:bg-gray-800 rounded-full"
                disabled={currentChapter === 0}
              >
                <SkipBack className="h-6 w-6" />
              </button>
              <button
                onClick={togglePlay}
                className="p-3 bg-blue-600 hover:bg-blue-700 rounded-full"
              >
                {isPlaying ? <Pause className="h-6 w-6" /> : <Play className="h-6 w-6" />}
              </button>
              <button
                onClick={() => setCurrentChapter(Math.min(chapters.length - 1, currentChapter + 1))}
                className="p-2 hover:bg-gray-800 rounded-full"
                disabled={currentChapter === chapters.length - 1}
              >
                <SkipForward className="h-6 w-6" />
              </button>
              <div className="flex-1 flex items-center space-x-2">
                <span className="text-sm">{formatTime(currentTime)}</span>
                <input
                  type="range"
                  min="0"
                  max={audioRef.current?.duration || 0}
                  value={currentTime}
                  onChange={handleSeek}
                  className="flex-1"
                />
                <span className="text-sm">{chapters[currentChapter].duration}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Chapter List with Content */}
        <div className="mt-8 bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">รายการตอน</h2>
          <div className="space-y-6">
            {chapters.map((chapter, index) => (
              <div
                key={chapter.id}
                className={`p-6 rounded-lg transition-colors ${
                  currentChapter === index
                    ? 'bg-blue-50 border border-blue-200'
                    : 'bg-gray-50 hover:bg-gray-100'
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold">{chapter.title}</h3>
                    <p className="text-sm text-gray-500">ความยาว: {chapter.duration}</p>
                  </div>
                  <button
                    onClick={() => setCurrentChapter(index)}
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    {currentChapter === index && isPlaying ? 'กำลังเล่น' : 'เล่น'}
                  </button>
                </div>

                {/* Chapter Content */}
                <div className="prose max-w-none">
                  <p className="text-gray-700 whitespace-pre-line mb-4">
                    {chapter.content}
                  </p>
                </div>

                {/* Notes Section */}
                <div className="mt-4">
                  <h4 className="font-medium mb-2">บันทึกของคุณ</h4>
                  <textarea
                    placeholder="เพิ่มโน้ตของคุณที่นี่..."
                    value={chapterNotes[chapter.id] || ''}
                    onChange={(e) => handleNoteChange(chapter.id, e.target.value)}
                    className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                    rows={3}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}