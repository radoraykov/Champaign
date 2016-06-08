const ActionStream = Backbone.View.extend({

  el: '.action-stream',

  events: {
    'click .petition-bar__close-button': 'hide',
    'click .petition-bar__clear-form': 'clearForm',
    'ajax:success form.action': 'handleSuccess',
  },

  // options: object with any of the following keys
  //    followUpUrl: the url to redirect to after success
  //    submissionCallback: callback with event and server data for successful submission
  //    outstandingFields: the names of step 2 form fields that aren't satisfied by
  //      the values in the member hash.
  //    member: an object with fields that will prefill the form
  //    location: a hash of location values inferred from the user's request
  //    akid: the actionkitid (akid) to save with the user request
  //    thermometer: options to display on the thermometer
  //    cosmetic: if true, then it will adjust heights and make the bar sticky scroll
  initialize(options = {}) {
    window.setInterval(this.updateTimestamps.bind(this), 1000);
    this.actionsContainer = this.$('.action-stream__actions');
    this.addAction({type: 'signature', name: 'Chester Watson'});
    window.setTimeout(() => {this.addAction({type: 'donation', name: 'Jordy Wabbit'})}, 1200);
    window.setTimeout(() => {this.addAction({type: 'donation', name: 'Michael G.'})}, 2400);
    window.setTimeout(() => {this.addAction({type: 'donation', name: 'Michael J.'})}, 4000);
    window.setTimeout(() => {this.addAction({type: 'signature', name: 'Werner Van Braun'})}, 6000);
  },

  updateTimestamps() {
    this.$('.stream-action__timestamp').each((ii, el) => {
      let $el = this.$(el);
      let seconds = Number.parseInt($el.data('seconds'), 10) + 1;
      $el.data('seconds', seconds);
      $el.text(I18n.t('homepage.action_stream.seconds_ago', {seconds: seconds}));
    });
  },

  addAction(action) {
    this.actionsContainer.prepend(this.template(action.type, action.name, 1));

    // additions need to be batched in case the time difference between additions
    // is less than the time it takes to animate one onto the screen
    this.actionsContainer.css('transition', 'left 0s');
    this.actionsContainer.css('left', `-${this.actionsContainer.children().first().outerWidth()}px`);
    window.setTimeout(()=> {
      this.actionsContainer.css('transition', 'left 1s ease-in-out');
      this.actionsContainer.css('left', '0');
    }, 32);
  },

  template(action_type, name, seconds_ago) {
    if(action_type !== 'signature' && action_type !== 'donation') {
      console.error(`Invalid action_type '${action_type}'. Expected 'signature' or 'donation'.`);
      return;
    }
    let actionTranslation = `homepage.action_stream.${action_type}`
    let icon = (action_type === 'donation') ? 'usd' : 'pencil'
    return `<div class="action-stream__template stream-action">
              <div class="stream-action__icon-holder">
                <span class="stream-action__icon fa fa-${icon}"></span>
              </div>
              <div class="stream-action__text">
                <div class="stream-action__credit">
                  ${I18n.t(actionTranslation, {name: name})}
                </div>
                <div class="stream-action__timestamp" data-seconds="${seconds_ago}">
                  ${I18n.t('homepage.action_stream.seconds_ago', {seconds: seconds_ago})}
                </div>
              </div>
            </div>`
  },

});

module.exports = ActionStream;
