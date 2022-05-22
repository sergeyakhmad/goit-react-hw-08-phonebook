import { useDispatch, useSelector } from 'react-redux';
import { authSelectors } from 'redux/auth';
import authOperations from 'redux/auth/auth-operations';
import s from './UserMenu.module.scss';
import defaultAvatar from './default-avatar.png';

const UserMenu = () => {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUsername);
  const avatar = defaultAvatar;

  return (
    <div className={s.menu}>
      <img src={avatar} alt="" width="32" className={s.img} />
      <span className={s.name}>Welcome, {name}</span>
      <button
        type="button"
        className={s.btn}
        onClick={() => {
          dispatch(authOperations.logOut());
        }}
      >
        Log out
      </button>
    </div>
  );
};

export default UserMenu;
