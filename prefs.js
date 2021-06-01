const Gdk = imports.gi.Gdk;
const Gio = imports.gi.Gio;
const Gtk = imports.gi.Gtk;

function open_panel() {
    const appinfo = Gio.DesktopAppInfo.new("gnome-background-panel.desktop");
    const launch_ctx = Gdk.Display.get_default().get_app_launch_context();
    appinfo.launch([], launch_ctx);
}

function init() {
}

function buildPrefsWidget() {
    const label = new Gtk.Label({label: "Cosmic is configured through Settings."});

    const button = new Gtk.Button({label: "Open in Settings"});
    button.connect("clicked", open_panel);

    const box = new Gtk.Box({
        orientation: Gtk.Orientation.VERTICAL,
        spacing: 6,
        halign: Gtk.Align.CENTER,
        valign: Gtk.Align.CENTER,
    });
    box.add(label);
    box.add(button);
    box.show_all();

    return box;
}
