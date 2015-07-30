/*
* spa.chat.js
* Chat feature module for SPA
*/

/*jslint        browser: true,  continue: true,
  devel: true,  indent: 2,      maxerr: 50,
  newcap: true, nome: true,     plusplus: true,
  regexp: true, sloppy: true, vars: false,
  white: true
*/

/*global $, spa, getComputedStyle */
spa.chat = (function() {
  // ----------------------- BEGIN MODULE SCOPE VARIABLES ---------------------
  var configMap = {
    main_html : String()
      + '<div class="spa-chat">'
        + '<div class="spa-chat-head">'
          + '<div class="spa-chat-head-toggle">+</div>'
          + '<div class="spa-chat-head-title">'
            + 'Chat'
          + '</div>'
        + '</div>'
        + '<div class="spa-chat-closer">x</div>'
        + '<div class="spa-chat-sizer">'
          + '<div class="spa-chat-msgs"></div>'
          + '<div class="spa-chat-box">'
            + '<input type="text"/>'
            + '<div>send</div>'
          + '</div>'
        + '</div>'
      + '</div>',
    settable_map : {
      slider_open_time: true,
      slider_close_time: true,
      slider_opened_em: true,
      slider_closed_em: true,
      slider_opened_title: true,
      slider_closed_title: true,

      chat_model: true,
      people_model: true,
      set_chat_anchor: true
    },
    slider_open_time: 250,
    slider_close_time: 250,
    slider_opened_em: 16,
    slider_closed_em: 2,
    slider_opened_title: 'Click to close',
    slider_closed_title: 'Click to open',

    chat_model: null,
    people_model: null,
    set_chat_anchor: null
  },
  stateMap = {
    $append_target: null,
    position_type: 'closed',
    px_per_em: 0,
    slider_hidden_px: 0,
    slider_closed_px: 0,
    slider_opened_px: 0
  },
  jqueryMap = {},

  setJqueryMap, getEmSize, setPxSizes, setSliderPosition, onClickToggle, configModule, initModule;
  // ----------------------- END MODULE SCOPE VARIABLES -----------------------
  // ----------------------- BEGIN UTILITY METHODS ----------------------------
  getEmSize = function( elem ) {
    return Number(
      getComputedStyle( elem, '').fontSize.match(/\d*\.?\d*/)[0]
    ;)
  };
  // ----------------------- END UTILITY METHODS ------------------------------
  // ----------------------- BEGIN DOM METHODS --------------------------------
  // Begin DOM method /setJqueryMap/
  setJqueryMap = function() {
    var
    $append_target = stateMap.$append_target,
    $slider = $append_target.find( '.spa-chat' );

    jqueryMap = {
      $slider: $slider,
      $head: $slider.find( '.spa-chat-head' ),
      $toggle: $slider.find( '.spa-chat-head-toggle' ),
      $title: $slider.find( '.spa-chat-head-title' ),
      $sizer: $slider.find( '.spa-chat-sizer' ),
      $msgs: $slider.find( '.spa-chat-msgs' ),
      $box: $slider.find( '.spa-chat-box' ),
      $input: $slider.find( '.spa-chat-input input[type="text"]' )
    };
  };
  // End DOM method /setJqueryMap/

  // Begin DOM method /setPxSizes/
  setPxSizes = function() {
    var px_per_em, opened_height_em;
    px_per_em = getEmSize( jqueryMap.$slider.get(0) );

    opened_height_em = configMap.slider_opened_em;

    stateMap.px_per_em = px_per_em;
    stateMap.slider_closed_px = configMap.slider_closed_em * px_per_em;
    stateMap.slider_opened_px = opened_height_em * px_per_em;
    jqueryMap.$sizer.css({
      height: ( opened_height_em -2 ) * px_per_em
    });
  };
  // End DOM method /setPxSizes/


  // THIS IS WHERE YOU PICK THINGS BACK UP 



  // ----------------------- END DOM METHODS ----------------------------------
  // ----------------------- BEGIN EVENT HANDLERS -----------------------------
  // ----------------------- END EVENT HANDLERS -------------------------------
  // ----------------------- BEGIN PUBLIC METHODS -----------------------------
  // Begin public method /configModule/
  // Example : spa.chat.configModule({ slider_open_em : 18 });
  // Purpose: Configure the module prior to initialization
  // Arguments:
  //  * set_chat_anchor - a callback to modify the URI anchor to
  // indiate opened or closed state. This callback must return
  // false if the requested state cannot be met
  //  * chat_model - the chat model obejct provides the methods
  // to interact with our instant messaging
  //  * people_model - the people model object which provides
  // methods to manage the list of people the model maintains
  //  * slider_* settings. All these are optional scalars.
  //      See mapConfig.settable_map for a full list
  //      Example: slider_open_em is the open height in em's
  // Action:
  //  The internal configuration data structure (configMap) is
  // updated with provided arguments. No other actions are taken.
  // Returns : true
  // Throws : JavaScript error object and stack trace on
  //          unacceptable or missing arguments.
  //
  configModule = function( input_map ) {
    spa.util.setConfigMap({
      input_map: input_map,
      settable_map: configMap.settable_map,
      config_map: configMap
    });
    return true;
  };
  // End public method /configModule/

  // Begin public method /initModule/
  // Purpose: initializes module
  // Arguments:
  // * $container the jquery element used by this feature
  // Returns : true
  // Throws: none
  //
  initModule = function( $container ) {
    $container.html( configMap.main_html );
    stateMap.$container = $container;
    setJqueryMap();
    return true;
  };
  // End public method /initModule/

  // return public METHODS
  return {
    configModule: configModule,
    initModule: initModule
  };
  // ----------------------- END PUBLIC METHODS -------------------------------
}());
