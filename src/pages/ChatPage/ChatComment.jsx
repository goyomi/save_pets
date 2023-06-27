<<<<<<< HEAD
<<<<<<< HEAD
import React, { useContext, useState, forwardRef } from 'react';
=======
import React, { useContext, useState } from 'react';
>>>>>>> 92424a5 (move: style 파일 전체 분리)
=======
import React, { useContext, useState, forwardRef } from 'react';
>>>>>>> 211b664 (fix: 채팅방일 때는 작성된 댓글이 사라지고 api 통신 막기)
import * as S from './ChatComment.style';
import PostUserProfileImg from '../../components/Post/PostUserProfileImg';
import { AuthContextStore } from '../../context/AuthContext';
import { addComment } from '../../api/comment';
<<<<<<< HEAD
<<<<<<< HEAD
import { useLocation } from 'react-router-dom';

const ChatComment = forwardRef(({ setCommentList, atChatroom, userProfileImg, postId, setCommentCnt }, ref) => {
  const [text, setText] = useState('');
  const { userToken } = useContext(AuthContextStore);
  const location = useLocation();

  const submitComment = async (e) => {
    e.preventDefault();
    if (location.pathname === '/chat/room') return setText('');
    try {
      const data = await addComment(postId, text, userToken);
=======
=======
import { useLocation } from 'react-router-dom';
>>>>>>> 211b664 (fix: 채팅방일 때는 작성된 댓글이 사라지고 api 통신 막기)

const ChatComment = forwardRef(({ setCommentList, atChatroom, userProfileImg, postId, setCommentCnt }, ref) => {
  const [text, setText] = useState('');
  const { userToken } = useContext(AuthContextStore);
  const location = useLocation();

  const submitComment = async (e) => {
    e.preventDefault();
    if (location.pathname === '/chat/room') return setText('');
    try {
      const data = await addComment(postId, text, userToken);
<<<<<<< HEAD
      // console.log(data);
>>>>>>> 92424a5 (move: style 파일 전체 분리)
=======
>>>>>>> 211b664 (fix: 채팅방일 때는 작성된 댓글이 사라지고 api 통신 막기)
      setCommentCnt((prev) => prev + 1);
      setCommentList((prev) => [data.comment, ...prev]);
      setText('');
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleOnChange = (e) => {
    setText(e.target.value);
  };

  const handleImgUpload = (e) => {
    const file = e.target.files[0];
    console.log(file);
  };

  let isActivated = false;
  if (text) isActivated = true;

  return (
    <S.Footer>
      {atChatroom ? (
        <S.UploadForm>
          <label htmlFor='imgUpload'></label>
          <input className='a11y-hidden' type='file' id='imgUpload' accept='image/*' onChange={handleImgUpload} />
        </S.UploadForm>
      ) : (
        <PostUserProfileImg size={'36px'} userProfileImg={userProfileImg} />
      )}
      <S.SendForm onSubmit={submitComment}>
        <S.Input
          type='text'
          value={text}
          placeholder={atChatroom ? '메시지 입력하기...' : '댓글 입력하기...'}
          onChange={handleOnChange}
<<<<<<< HEAD
<<<<<<< HEAD
          ref={ref}
=======
>>>>>>> 92424a5 (move: style 파일 전체 분리)
=======
          ref={ref}
>>>>>>> 211b664 (fix: 채팅방일 때는 작성된 댓글이 사라지고 api 통신 막기)
        />
        <S.PostBtn isActivated={isActivated} type='submit'>
          {atChatroom ? '전송' : '게시'}
        </S.PostBtn>
      </S.SendForm>
    </S.Footer>
  );
<<<<<<< HEAD
<<<<<<< HEAD
});
=======
};
>>>>>>> 92424a5 (move: style 파일 전체 분리)
=======
});
>>>>>>> 211b664 (fix: 채팅방일 때는 작성된 댓글이 사라지고 api 통신 막기)

export default ChatComment;
