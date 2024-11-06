{
  description = "A very basic flake";

  outputs =
    { self, nixpkgs }:
    let
      system = "x86_64-linux";
      pkgs = nixpkgs.legacyPackages.${system};
    in
    {
      devShells.${system}.default = pkgs.mkShell {
        packages = with pkgs; [ nodejs ];
        NIX_LD_LIBRARY_PATH =
          with pkgs;
          lib.makeLibraryPath [
            gtk3
            glib
            nss
            nspr
            dbus
            atk
            cups
            libdrm
            gdk-pixbuf
            pango
            cairo
            xorg.libX11
            xorg.libXcomposite
            xorg.libXdamage
            xorg.libXext
            xorg.libXfixes
            xorg.libXrandr
            xorg.libxcb
            mesa
            expat
            libxkbcommon
            udev
            alsa-lib
            libGL
          ];
        NIX_LD = pkgs.lib.fileContents "${pkgs.stdenv.cc}/nix-support/dynamic-linker";

        shellHook = ''
          export PATH=$PATH:$PWD/node_modules/.bin
        '';
      };
    };
}
