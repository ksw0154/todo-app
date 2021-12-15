import { useState, useCallback } from 'react';
import { MdAdd } from 'react-icons/md';
import './TodoInsert.scss';

const TodoInsert = ({ onInsert }) => {
  const [value, setValue] = useState('');

  const onChange = useCallback((e) => {
    setValue(e.target.value);
  }, []);

  const onSubmit = useCallback(
    (e) => {
      onInsert(value);
      setValue('');

      // onSubmit event는 페이지를 새로고침 시키기 때문에 e.preventDefault()를 사용한다.
      e.preventDefault();
    },
    [onInsert, value],
  );

  return (
    // onClick event로 충분히 처리할 수 있다.
    // onSubmit을 사용했을 때 Enter 키를 사용할 수 있게 된다.
    <form className="TodoInsert" onSubmit={onSubmit}>
      <input
        placeholder="할 일을 입력하세요"
        value={value}
        onChange={onChange}
      />
      <button type="submit">
        <MdAdd />
      </button>
    </form>
  );
};

export default TodoInsert;
