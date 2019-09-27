#!/usr/bin/gjs

imports.gi.versions.Gtk = '3.0';

const Gio = imports.gi.Gio;
const GLib = imports.gi.GLib;
const Gtk = imports.gi.Gtk;

class Application {
    //create the application
    constructor() {
        this.application = new Gtk.Application({
            application_id: 'dev.dz0ny.betty',
            flags: Gio.ApplicationFlags.FLAGS_NONE,
        });

       this.application.connect('activate', this._onActivate.bind(this));
    }

    //callback function for 'activate' signal
    _onActivate() {
        let win = new Gtk.Window({
            type: Gtk.WindowType.TOPLEVEL,
            default_width: 600,
            default_height: 80,
        });
        win.title = "Betty";

       /* Here are a few ways we can customize our window.
       Try uncommenting them or changing their values! */
  
        win.decorated=false;
        win.deletable=false;
        win.has_focus=true;
        win.modal=true;
        win.skip_taskbar_hint=true;
        win.skip_pager_hint=true;
        win.urgency_hint=true;
        win.resizable=true;
        win.can_focus=false;
        win.window_position=Gtk.WindowPosition.CENTER;
        win.resize(600, 80);
        //show the window and all child widgets (none in this case)
        win.show_all();



        var hbox = new Gtk.HBox();

        hbox.homogeneous = true;
    
            
        let search = new Gtk.SearchEntry();
        search.visible = true;
        search.placeholder_text = "Command ...";
        var btn = new Gtk.Button({label: "Cog"});
        //win.add(hbox);
        //win.add(search);
        //hbox.pack_start(search, true, true, 1);
        //hbox.pack_start(btn, true, true, 1);
        var label = new Gtk.Label({label: ''});
        label.set_alignment(1, 0);
        hbox.pack_start(label, false, true, 1);
        win.add(hbox);
        this.application.add_window(win);
    }
};

//run the application
let app = new Application ();
app.application.run (ARGV);