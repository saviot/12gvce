import React, {useContext} from 'react';
import Card from './Card';
import EditProfilePopup from './EditProfilePopup';
import AddPlacePopup from './AddPlacePopup';
import EditAvatarPopup from './EditAvatarPopup';
import CurrentUserContext from '../contexts/CurrentUserContext';

function Main({cardData, onDeleteCard, setCardData}) {
  // Access the current user data from the context
  const currentUser = useContext(CurrentUserContext);

  // Ensure currentUser and its properties are safely accessed
  const {avatar, nama, title, setCurrentUser} = currentUser || {};

  return (
    <main>
      <section className='profile'>
        <div className='profile__container'>
          <EditAvatarPopup
            avatar={avatar || '#'}
            setUserData={setCurrentUser}
          />
          <div className='profile__info'>
            <div className='profile__name-container'>
              <h1 className='profile__name'>{nama || 'Loading...'}</h1>
              <EditProfilePopup
                nama={nama}
                title={title}
                setUserData={setCurrentUser}
              />
            </div>
            <p className='profile__title'>{title || 'No title set'}</p>
          </div>
          <AddPlacePopup setCardData={setCardData} />
        </div>
      </section>
      <section className='card'>
        <div className='card__container'>
          {cardData.map((card) => (
            <Card
              key={card._id}
              link={card.link}
              name={card.name}
              likes={card.likes}
              card_id={card._id}
              owner_id={card.owner._id}
              onDeleteCard={onDeleteCard}
            />
          ))}
        </div>
      </section>
    </main>
  );
}

export default Main;
