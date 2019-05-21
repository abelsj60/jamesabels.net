import Referrer from './Referrer';
import ReactGA from 'react-ga';

export default class ClickHandling {
  constructor(component, outsideThis, props) {
    if (outsideThis.props.location === undefined) {
      throw new Error(
        'Caller must carry location.'
      );
    }

    const referrer = new Referrer(outsideThis.props);

    this._props = props;
    this._component = component;
    this._referrer = referrer;

    this.boundHandleClick = this._selectHandleClick(outsideThis);
  }

  // Binds a handleClick function to boundHandleClick; this
  // function will be invoked directly or passed as an arg.

  _selectHandleClick(outerThis) {
    let selectedHandler;

    switch (this._component) {
      case 'app':
        selectedHandler = this._handleClickForAppComponent;
        break;
      case 'body':
        selectedHandler = this._handleClickForBodyComponent;
        break;
      case 'header':
        selectedHandler = this._handleClickForHeader;
        break;
      case 'home':
        selectedHandler = this._handleClickForHome;
        break;
      case 'pulser':
        selectedHandler = this._handlePulser;
        break;
      default:
        break;
    }

    return selectedHandler.call(outerThis, this);
  }

  // Handles onClicks on App (top-level state).

  _handleClickForAppComponent(self) {
    return (updateValue, value) => {
      const {
        currentCaller,
        showBusinessCard,
        showLegalTerms,
        inCity,
        showStoryText,
        isMenu
      } = this.state;
      const stateToUpdate = {};
      let category = '';
      let action = '';
      let label = '';

      switch (updateValue) {
        case 'toggleBusinessCard':
          stateToUpdate.showBusinessCard = !showBusinessCard;
          if (showLegalTerms) {
            stateToUpdate.showLegalTerms = !showLegalTerms;
          }
          category = 'App state';
          action = !showBusinessCard
            ? 'Open business card'
            : 'Close business card';
          label = showLegalTerms
            ? 'Legal notice was open'
            : '';
          break;
        case 'toggleLegalTerms':
          stateToUpdate.showLegalTerms = !showLegalTerms;
          if (showBusinessCard) {
            stateToUpdate.showBusinessCard = !showBusinessCard;
          }
          category = 'App state';
          action = !showLegalTerms
            ? 'Open legal terms'
            : 'Close legal terms';
          label = showBusinessCard
            ? 'Business card was open'
            : '';
          break;
        case 'toggleStoryText':
          stateToUpdate.showStoryText = !showStoryText;
          if (showBusinessCard) {
            stateToUpdate.showBusinessCard = !showBusinessCard;
          }
          if (showLegalTerms) {
            stateToUpdate.showLegalTerms = !showLegalTerms;
          }
          category = 'App state';
          action = showStoryText
            ? 'Hide story text'
            : 'Close story text';
          label = showBusinessCard
            ? 'Business card was open'
            : showLegalTerms
              ? 'Legal notice was open'
              : '';
          break;
        case 'swapBackground':
          stateToUpdate.inCity = !inCity;
          category = 'App state';
          action = !inCity
            ? 'Enter city'
            : 'Enter fantasy';
          break;
        case 'toggleMenu':
          stateToUpdate.isMenu = !isMenu;
          category = 'App state';
          action = !isMenu
            ? `Enter: ${currentCaller} menu`
            : `Leave: ${currentCaller} menu`;
          break;
        case 'updateApp':
          if (value !== undefined) {
            stateToUpdate.currentCaller = value;
            stateToUpdate.lastCaller = currentCaller;
          }
          stateToUpdate.recordPageview = true;
          stateToUpdate.showBusinessCard = false;
          stateToUpdate.showLegalTerms = false;
          if (isMenu !== self._referrer.isMenu(this.props)) {
            stateToUpdate.isMenu = !isMenu;
          }
          if (
            !(currentCaller === 'chapter' && value === 'reverie')
            && !(currentCaller === 'reverie' && value === 'chapter')
          ) {
            stateToUpdate.showStoryText = true;
          }
          category = 'App state';
          action = 'Reset app';
          break;
        default:
          break;
      }

      if (updateValue !== 'updateApp') {
        ReactGA.event({
          category,
          action,
          label: label
            ? label
            : null
        });
      }

      return this.setState(() => stateToUpdate);
    };
  }

  // Handles onClicks on Body (updates state for reloads).

  _handleClickForBodyComponent(self) {
    return (valueOne, valueTwo) => {
      const stateToUpdate = {};

      switch (self._referrer.location) {
        case 'chapter':
          stateToUpdate.indexForChapterData = valueOne;
          break;
        case 'projects':
          stateToUpdate.indexForProjectData = valueOne;
          stateToUpdate.indexForProjectPics = valueTwo;
          break;
        case 'journalism':
          stateToUpdate.indexForPublication = valueOne;
          stateToUpdate.indexForArticleData = valueTwo;
          break;
        case 'reverie':
          stateToUpdate.indexForReverieData = valueOne;
          break;
        default:
          break;
      }

      return this.setState(stateToUpdate);
    };
  }

  // Handles onClicks on Header (header menu).

  _handleClickForHeader() {
    return () => {
      const { menuIsOpen } = this.state;

      // Let's define a function w/the Header's 'this'
      // value to control the header state.

      const toggleState = function() {
        this.setState({
          menuIsOpen: !menuIsOpen
        });
      };

      if (!menuIsOpen) {
        // We'll use .call to invoke our function so
        // as to ensure the 'this' value is right.
        // Alternative: We could define it externally
        // and pass it in.

        toggleState.call(this);
        this.timeoutId = setTimeout(() => {
          // Comment next line to suspend auto-close
          this.setState({ menuIsOpen: false });
        }, 5000);
      } else {
        clearTimeout(this.timeoutId);
        this.timeoutId = undefined;

        // See comment above.

        toggleState.call(this);
      }
    };
  }

  // Handles onClicks on Home (spell, part one).

  _handleClickForHome() {
    return updateValue => {
      if (this.transition === 1) {
        return null;
      }

      const { isCasting, pattern } = this.state;
      const stateToUpdate = {};

      switch (updateValue) {
        case 'toggleSpell':
          stateToUpdate.isCasting = !isCasting;

          // If we're casting a spell, we need a full reset.

          if (isCasting) {
            // We'll reset the spell whenever we leave the Pulsers.
            // We'll keep the same pattern as long was we don't
            // unmount or successfully complete the spell.

            stateToUpdate.activePulser = pattern[0];
            stateToUpdate.castSpell = false;
            stateToUpdate.score = 0;
          }

          break;
        case 'castSpell':
          // Let's first create a new spell for the return trip.
          stateToUpdate.pattern = this.createSpellPattern();
          stateToUpdate.castSpell = true;
          break;
      }

      this.setState(stateToUpdate);
    };
  }

  // Handles onClicks on Charms (spell, part two).

  _handlePulser() {
    return isActive => {
      const { score } = this.state;
      const abracadabra = score + 1 === this.goal; // Magic!

      // If the Pulser isn't active, or if it's tme for magic.

      if (!isActive || isActive && abracadabra) {
        // We can invoke ClickHandling with the proper 'this' b/c
        // we invoked it w/Home's 'this' value via .call()

        const hcForHome = new ClickHandling('home', this);
        const boundHandleClickForHome = hcForHome.boundHandleClick;

        if (isActive && abracadabra) {
          // We store the background value in App so it's remembered
          // as the user travels through the site.

          ReactGA.event({
            category: 'Home state',
            action: 'Spell successful.'
          });

          this.props.boundHandleClickForApp('swapBackground');
          boundHandleClickForHome('castSpell');
        } else {
          ReactGA.event({
            category: 'Home state',
            action: 'Wrong Pulser clicked.',
            label: `The score was ${score}.`
          });

          boundHandleClickForHome('toggleSpell');
        }

        return null;
      }

      //  The Pulser is active, and the user isn't done yet.

      this.setState(
        state => {
          const newScore = state.score += 1;
          return {
            score: newScore,
            activePulser: state.pattern[newScore]
          };
        }
      );
    };
  }
}
