import Controller from '@ember/controller';
import { match, not, gte, and } from '@ember/object/computed';

export default Controller.extend({
  isValid: match('emailAddress', /^.+@.+\..+$/),
  isValidName: match('name', /^[a-z ,.'-]+$/i),
  isLongEnough: gte("message.length", 5),
  isBothTrue: and('isValid', 'isValidName','isLongEnough'),
  isDisabled: not('isBothTrue'),

  actions: {
    contactMessage: function() {
      var newMessage = this.store.createRecord('message', {
        name: this.get('name'),
        emailAddress: this.get('emailAddress'),
        message: this.get('message')
      });
      newMessage.save();
      window.alert(`Thank you for your message!`)
      this.set('name', '')
      this.set('emailAddress', '')
      this.set('message', '')
    }
  }
});
