import { useEffect, useState } from 'react';
import Post from './Post';

function App() {
  const [post, setPost] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setPost([
        { title: 'useEffect', body: 'sdsa asdas dAD  DASD AS ' },
        { title: 'useCallback', body: 'sdsa asdas dAD  DASD AS ' },
        { title: 'useMemo', body: 'sdsa asdas dAD  DASD AS ' },
      ]);
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <div className='App'>
      <Post data={post} loading={loading} />
    </div>
  );
}

export default App;
