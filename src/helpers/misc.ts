import util from './utils';
import { IMG_URL } from '../constant/url';
import { IMAGES } from '../constant';

type WinningProps = { win: string | React.ReactSVGElement; type: string };

const misc = {
  accessToken(): string {
    const { accessToken } = util.getItem('accessToken', true);
    return accessToken;
  },
  registrationId(): string {
    const isLoggedIn = util.getItem('auth');
    if (isLoggedIn) {
      const data = util.getItem('user', true);
      return data.user.registrationId;
    }

    return '';
  },

  user(): any {
    const data = util.getItem('user', true);
    return data.user;
  },

  pageview(): number {
    return util.getDocumentHeight() - 115;
  },

  getFirtLetter(text: string): string {
    text = text.substring(0, 1);
    return text.toUpperCase();
  },

  text(text: string): string {
    if (text === null) {
      text = '---';
    } else {
      text = text.length > 15 ? text.substring(0, 20) + '...' : text;
    }

    return text;
  },

  UserPhoto(url: string): string {
    const UserImage = url ? `${IMG_URL}${url}` : IMAGES.emptyPhoto;
    return UserImage;
  },

  numberOfWinner(category: number): string {
    let message;
    if (category > 5) {
      message = 'In this category only 3 users with the highest point win';
    } else if (category === 5) {
      message = 'In this category only 2 users with the highest point win';
    } else {
      message = 'In this category only 1 user with the highest point wins';
    }
    return message;
  },

  winning(win: string): WinningProps {
    let type;
    switch (win) {
      case 'WON':
        type = { win: 'Won', type: 'won' };
        break;
      case 'LOSE':
        type = { win: 'Lose', type: 'lose' };
        break;
      default:
        type = {
          win: '---',
          type: 'pending',
        };
    }

    return type;
  },

  isMobileView(): boolean {
    const height = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
    return height < 767 ? true : false;
  },

  sideBarContent(): number {
    const height = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);

    if (this.isMobileView()) return height;
    else return height - 150;
  },

  mainContent(): number {
    const height = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
    if (this.isMobileView()) return height - 50;
    else return height - 140;
  },
};

export default misc;
