// Generated by CoffeeScript 1.7.1
(function() {
  var app, maxdown;

  $(document).ready(function() {
    app.init();
    return maxdown.init(".editor");
  });

  app = {
    init: function() {
      return this.bind_events();
    },
    bind_events: function() {
      $(document).on("click", ".btn-menu", function(e) {
        e.preventDefault();
        $(this).toggleClass("active");
        $(".main-nav").toggleClass("active");
        return $(".actions, .title").fadeToggle();
      });
      $(document).on("click", ".btn-theme", function(e) {
        e.preventDefault();
        $(this).toggleClass("maxdown-light maxdown-dark");
        return maxdown.toggle_theme();
      });
      $(document).on("click", ".btn-new-document", function(e) {
        e.preventDefault();
        return maxdown.new_document();
      });
      $(document).on("click", ".document", function(e) {
        e.preventDefault();
        $('.documents .document').removeClass('active');
        $(this).addClass('active');
        return maxdown.load_document($(this).data('docid'));
      });
      $(document).on("click", ".navbar .title", function(e) {
        if (maxdown.current_doc !== null) {
          return $("input", $(this)).show().focus();
        }
      });
      $(document).on("blur", ".title input", function(e) {
        maxdown.rename_document($(this).val());
        return $(this).hide();
      });
      return $(document).on("keydown", ".title input", function(e) {
        var key;
        key = e.keyCode || e.which;
        if (key === 13) {
          maxdown.rename_document($(this).val());
          return $(this).hide();
        }
      });
    }
  };

  maxdown = {
    version: '0.2.1 (7. April 2015)',
    cm: '',
    autosave_interval_id: null,
    autosave_interval: 5000,
    is_saved: true,
    current_doc: null,
    default_title: 'UntitledDocument',
    default_value: '# Maxdown - Markdown Editor\n\nPlease open a new document or choose an excisting from the sidebar. This document **won\'t be saved**.\n\n\n\n# Headline 1\n\n## Headline 2\n\n### Headline 3\n\n**strong**\n\n*emphasize*\n\n~~strike-through~~\n\n[Link](http://google.com)\n\n![Image](http://google.com/image.png)',
    init: function(selector, t) {
      if (t == null) {
        t = 'maxdown-light';
      }
      console.log('/*');
      console.log(' * Maxdown - Markdown Editor');
      console.log(' * Version: ' + this.version);
      console.log(' * Author: Max Boll');
      console.log(' * Website: http://opoloo.com');
      console.log(' * License: MIT');
      console.log(' */');
      $(".title span").html('Maxdown - Markdown Editor');
      $(".title input").val('Maxdown - Markdown Editor');
      this.cm = CodeMirror($(selector)[0], {
        value: this.default_value,
        mode: {
          name: 'gfm',
          highlightFormatting: true
        },
        lineWrapping: true,
        tabSize: 2,
        theme: t
      });
      this.bind_events();
      this.load_documents();
      return this.autosave_interval_id = setInterval(function() {
        return maxdown.autosave();
      }, maxdown.autosave_interval);
    },
    bind_events: function() {
      $(document).on('change', '.documents', function(e) {
        return maxdown.load_document($(this).val());
      });
      $(document).on('change', '.font-size', function(e) {
        return maxdown.set_font_size($(this).val());
      });
      $(document).on('change', '.theme', function(e) {
        return maxdown.set_theme($(this).val());
      });
      return this.cm.on("change", function(cm, change) {
        maxdown.is_saved = false;
        $(".save-info").html('Not saved...');
        return window.onbeforeunload = function() {
          return "You have unsaved changes in your document.";
        };
      });
    },
    autosave: function() {
      var doc;
      if (this.current_doc !== null && this.is_saved !== true) {
        doc = JSON.parse(localStorage.getItem(this.current_doc));
        doc.updated_at = Date.now();
        if (doc.content !== this.cm.getValue()) {
          $(".save-info").html('Saving...');
          doc.content = this.cm.getValue();
          localStorage.setItem(doc.id, JSON.stringify(doc));
          console.log('Document overwritten (Doc-ID: ' + this.current_doc + ')');
          this.is_saved = true;
          $(".save-info").html('Saved!');
          return window.onbeforeunload = void 0;
        }
      }
    },
    rename_document: function(new_title) {
      var doc;
      doc = JSON.parse(localStorage.getItem(this.current_doc));
      doc.title = new_title;
      localStorage.setItem(doc.id, JSON.stringify(doc));
      $('.documents .document[data-docid=' + doc.id + ']').html(new_title + '.md');
      $('.title span').html(new_title);
      return console.log('Renamed document (Doc-ID: ' + maxdown.current_doc + ')');
    },
    new_document: function() {
      this.cm.setValue(this.default_value);
      this.cm.clearHistory();
      return this.save_document();
    },
    load_document: function(id) {
      var doc;
      doc = JSON.parse(localStorage.getItem(id));
      $(".title span").html(doc.title);
      $(".title input").val(doc.title);
      this.cm.setValue(doc.content);
      this.current_doc = doc.id;
      this.is_saved = true;
      return $(".save-info").html('Saved!');
    },
    set_font_size: function(size) {
      return $('.CodeMirror').css("font-size", size + "px");
    },
    toggle_theme: function() {
      $("body").toggleClass("maxdown-light maxdown-dark");
      if (this.cm.getOption('theme') === 'maxdown-light') {
        return this.cm.setOption('theme', 'maxdown-dark');
      } else {
        if (this.cm.getOption('theme') === 'maxdown-dark') {
          return this.cm.setOption('theme', 'maxdown-light');
        }
      }
    },
    set_theme: function(theme) {
      this.cm.setOption('theme', theme);
      $('body, #editor').removeClass("maxdown-light");
      $('body, #editor').removeClass("maxdown-dark");
      return $('body, #editor').addClass(theme);
    },
    load_documents: function() {
      var doc, documents, i, keys, sortable;
      documents = [];
      keys = Object.keys(localStorage);
      i = 0;
      while (i < keys.length) {
        documents.push(JSON.parse(localStorage.getItem(keys[i])));
        i++;
      }
      sortable = [];
      for (doc in documents) {
        sortable.push([doc, documents[doc].updated_at]);
      }
      sortable.sort(function(a, b) {
        return a[1] - b[1];
      });
      $(".documents").html("");
      return $.each(documents, function(key, doc) {
        return $(".documents").append('<div class="document" data-docid="' + documents[key].id + '">' + documents[key].title + '.md</div>');
      });
    },
    save_document: function() {
      var doc, doc_id, docname;
      docname = this.default_title;
      doc_id = this.generate_uuid();
      doc = {
        id: doc_id,
        created_at: Date.now(),
        updated_at: Date.now(),
        title: docname,
        content: this.cm.getValue()
      };
      localStorage.setItem(doc_id, JSON.stringify(doc));
      console.log('New document created. (Doc-ID: ' + doc_id + ')');
      $('.documents').prepend('<div class="document" data-docid="' + doc.id + '">' + doc.title + '.md</div>');
      return this.current_doc = doc_id;
    },
    generate_uuid: function() {
      var chars, i, r, rnd, uuid;
      chars = '0123456789abcdef'.split('');
      uuid = [];
      rnd = Math.random;
      r = void 0;
      i = 0;
      uuid[8] = uuid[13] = uuid[18] = uuid[23] = '-';
      uuid[14] = '4';
      while (i < 36) {
        if (!uuid[i]) {
          r = 0 | rnd() * 16;
          uuid[i] = chars[i === 19 ? r & 0x3 | 0x8 : r & 0xf];
        }
        i++;
      }
      return uuid.join('');
    }
  };

}).call(this);
