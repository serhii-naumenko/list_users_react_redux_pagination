import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteUserFromServer } from '../../api/api';
import { actions, selectors } from '../../store';
import { User } from '../../types/UserType';

export const TableBody: React.FC = () => {
  const loadedUsers: User[] = useSelector(selectors.loadUsers);
  const startIndex: number = useSelector(selectors.getStartIndex);
  const dispatch = useDispatch();

  let visibleUsers = loadedUsers.slice(startIndex, startIndex + 5);

  useEffect(() => {
    visibleUsers = loadedUsers.slice(startIndex, startIndex + 5);
  }, []);

  const handlerRemoveUser = useCallback((idOfUser: number) => {
    deleteUserFromServer(idOfUser);
    const shortenUsers = loadedUsers.filter(user => user.user_id !== idOfUser);

    dispatch(actions.getLocalUsers(shortenUsers));
  }, [dispatch, loadedUsers]);

  const handlerCorrectUser = useCallback(
    (idOfUser: number) => {
      const userToCorrect = loadedUsers.find(user => user.user_id === idOfUser);

      if (userToCorrect) {
        dispatch(actions.getIsOpenForm(false));
        dispatch(actions.getIsCorrectForm(true));
        dispatch(actions.getLocalUserId(idOfUser));
      }
    }, [dispatch, loadedUsers],
  );

  return (
    <>
      {loadedUsers.length > 0 && (
        visibleUsers.map((person) => (
          <tr
            className="TableBody__body--row"
            // eslint-disable-next-line
            key={person._id}
          >
            <td className="TableBody__body--cell">
              <p className="TableBody__body--text">
                {person.name}
              </p>
              <button
                className="TableBody__body--button"
                type="button"
                onClick={() => handlerCorrectUser(person.user_id)}
              >
                Correct user
              </button>
            </td>
            <td className="TableBody__body--cell">
              {person.surname}
            </td>
            <td className="TableBody__body--cell">
              {person.desc}
            </td>
            <td className="TableBody__body--cell">
              <button
                type="button"
                className="TableBody__body--button"
                // eslint-disable-next-line no-underscore-dangle
                onClick={() => handlerRemoveUser(person.user_id)}
              >
                Delete
              </button>
            </td>
          </tr>
        ))
      )}
    </>
  );
};
