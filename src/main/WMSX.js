// WebMSX version 2.0
// Copyright 2015 by Paulo Augusto Peccin. See license.txt distributed with this file.

// Main Emulator parameters.
// May be overridden dynamically by URL query parameters, if ALLOW_URL_PARAMETERS = true.
// Machine type and components are defined by Configuration Presets.

WMSX = {

    MACHINE:                        "MSX2PNTSC",                // Machine Type. See Machine Configuration

    PRESETS:                        "",                         // Configuration Presets to apply. See Presets Configuration

    // Full or relative URL of Media files to load
    CARTRIDGE1_URL:                 "",
    CARTRIDGE2_URL:                 "",
    DISKA_URL:                      "",
    DISKB_URL:                      "",
    TAPE_URL:                       "",
    STATE_LOAD_URL:                 "",

    // Extensions
    EXTENSIONS: {
        RAMMAPPER:                  0,
        DISK:                       0,
        DOS2:                       0,
        MSXMUSIC:                   0,
        SCC:                        0,
        SCCI:                       0,
        PAC:                        0
    },

    // General configuration
    AUTO_START_DELAY:               1200,                       // Negative = No Auto-Start, Positive = Start then wait milliseconds before Power-on
    MEDIA_CHANGE_DISABLED:          false,
    SCREEN_RESIZE_DISABLED:         false,
    SCREEN_FULLSCREEN_DISABLED:     false,
    SCREEN_ELEMENT_ID:              "wmsx-screen",
    SCREEN_FILTER_MODE:             1,                          // 0..3
    SCREEN_CRT_MODE:                1,                          // 0..1
    SCREEN_DEFAULT_SCALE:           1.1,                        // 0.5 .. N, 0.1 steps
    SCREEN_DEFAULT_ASPECT:          1.1,                        // 0.1 steps
    SCREEN_CONTROL_BAR:             0,                          // 0 = Always, 1 = Hover
    SCREEN_MSX1_COLOR_MODE:         0,                          // 0..5
    SCREEN_FORCE_HOST_NATIVE_FPS:   -1,                         // Set 60 or 50 to force value. -1 = Autodetect. Don't change! :-)
    SCREEN_VSYNCH_MODE:             1,                          // 0 = disabled, 1 = auto (when matches), 2 = forced (only for 60/50Hz)
    AUDIO_BUFFER_SIZE:              512,                        // 256, 512, 1024, 2048, 4096, 8192. 0 = disable. More buffer = more delay
    KEYBOARD_JAPAN_LAYOUT:          1,                          // 0 = ANSI, 1 = JIS
    IMAGES_PATH:                    window.WMSX_IMAGES_PATH || "images/",

    BIOS_SLOT:                      [0],
    CARTRIDGE1_SLOT:                [1],
    CARTRIDGE2_SLOT:                [2],
    EXPANSION_SLOTS:                [[2, 1], [2, 2]],
    RAMMAPPER_SIZE:                 256,

    ALLOW_URL_PARAMETERS:           false                       // Allows user to override any of these parameters via URL query parameters

};

WMSX.MACHINES_CONFIG = {

    MSX2PNTSC: {
        desc:               "MSX2+ Brazil",
        presets:            "MSX2PNTSC"
    },
    MSX2PPAL: {
        desc:               "MSX2+ Europe",
        presets:            "MSX2PNTSC"
    },
    MSX2PJAP: {
        desc:               "MSX2+ Japan",
        presets:            "MSX2PJAP"
    },

    MSX2NTSC: {
        desc:               "MSX2 Brazil",
        presets:            "MSX2NTSC"
    },
    MSX2PAL: {
        desc:               "MSX2 Europe",
        presets:            "MSX2NTSC"
    },
    MSX2JAP: {
        desc:               "MSX2 Japan",
        presets:            "MSX2JAP"
    },

    MSX1NTSC: {
        desc:               "MSX1 Brazil",
        presets:            "MSX1NTSC"
    },
    MSX1PAL: {
        desc:               "MSX1 Europe",
        presets:            "MSX1NTSC"
    },
    MSX1JAP: {
        desc:               "MSX1 Japan",
        presets:            "MSX1JAP"
    }

};

WMSX.EXTENSIONS_CONFIG = {
    RAMMAPPER:                  { desc: "RAM Mapper",    SLOT: [3, 0],          format: "RAMMapper",     mutual: "RAM64K" },
    RAM64K:                     {                        SLOT: [3, 0],          format: "RAM64K",        mutual: "RAMMAPPER" },
    DISK:                       { desc: "Floppy Drives", SLOT: [3, 2],          format: "DiskPatched" },
    DOS2:                       { desc: "MSX-DOS 2",     SLOT: [2, 2],          format: "DOS2",          require: "RAMMAPPER, DISK" },
    MSXMUSIC:                   { desc: "MSX-MUSIC",     SLOT: [3, 3],          format: "MSXMUSIC" },
    SCC:                        { desc: "Konami SCC",    SLOT: [1], SLOT2: [2], format: "SCCExpansion",  remove: "SCCI, PAC" },
    SCCI:                       { desc: "Konami SCC-I",  SLOT: [1], SLOT2: [2], format: "SCCIExpansion", remove: "SCC, PAC" },
    PAC:                        { desc: "PAC SRAM",      SLOT: [1], SLOT2: [2], format: "PACExpansion",  remove: "SCC, SCCI" }
};

WMSX.PRESETS_CONFIG = {         // TODO Review

    // MSX2+ Machine Presets

    MSX2P: {
        _INCLUDE:           "MSX2PNTSC"
    },

    MSX2PNTSC: {
        _INCLUDE:           "MSX2PBASE",
        MACHINE:            "MSX2PNTSC",
        SLOT_0_URL:         "@MSX2P_NTSC.bios",
        SLOT_3_1_URL:       "@MSX2PEXT_NTSC.bios"
    },

    MSX2PPAL: {
        _INCLUDE:           "MSX2PBASE",
        MACHINE:            "MSX2PPAL",
        SLOT_0_URL:         "@MSX2P_PAL.bios",
        SLOT_3_1_URL:       "@MSX2PEXT_PAL.bios"
    },

    MSX2PJAP: {
        _INCLUDE:           "MSX2PBASE",
        MACHINE:            "MSX2PJAP",
        SLOT_0_URL:         "@MSX2P_JAP.bios",
        SLOT_3_1_URL:       "@MSX2PEXT_JAP.bios"
    },

    MSX2PBASE: {
        _INCLUDE:           "MSX2BASE",
        MACHINE_TYPE:       3
    },

    // MSX2 Machine Presets

    MSX2: {
        _INCLUDE:           "MSX2NTSC"
    },

    MSX2NTSC: {
        _INCLUDE:           "MSX2BASE",
        MACHINE:            "MSX2NTSC",
        SLOT_0_URL:         "@MSX2_NTSC.bios",
        SLOT_3_1_URL:       "@MSX2EXT_NTSC.bios"
    },

    MSX2PAL: {
        _INCLUDE:           "MSX2BASE",
        MACHINE:            "MSX2PAL",
        SLOT_0_URL:         "@MSX2_PAL.bios",
        SLOT_3_1_URL:       "@MSX2EXT_PAL.bios"
    },

    MSX2JAP: {
        _INCLUDE:           "MSX2BASE",
        MACHINE:            "MSX2JAP",
        SLOT_0_URL:         "@MSX2_JAP.bios",
        SLOT_3_1_URL:       "@MSX2EXT_JAP.bios"
    },

    // MSX2/2+ Common

    MSX2BASE: {
        _INCLUDE:           "MSX1BASE, RAMMAPPER, MSXMUSIC",
        MACHINE_TYPE:       2
    },

    // MSX1 Machine Presets

    MSX1: {
        _INCLUDE:           "MSX1NTSC"
    },

    MSX1NTSC: {
        _INCLUDE:           "MSX1BASE",
        MACHINE:            "MSX1NTSC",
        SLOT_0_URL:         "@MSX1_NTSC.bios"
    },

    MSX1PAL: {
        _INCLUDE:           "MSX1BASE",
        MACHINE:            "MSX1PAL",
        SLOT_0_URL:         "@MSX1_PAL.bios"
    },

    MSX1JAP: {
        _INCLUDE:           "MSX1BASE",
        MACHINE:            "MSX1JAP",
        SLOT_0_URL:         "@MSX1_JAP.bios"
    },

    MSX1BASE: {
        MACHINE_TYPE:       1,
        SLOT_3_1_URL:       "@[Empty].rom",
        _INCLUDE:           "RAM64K, DISK, NOMSXMUSIC, NODOS2"
    },

    // Specific Machines Presets

    EMPTY: {
        MACHINE_TYPE:       3
    },

    // Extensions Options Presets

    DISK: { "EXTENSIONS.DISK": 1 },
    NODISK: { "EXTENSIONS.DISK": 0 },

    RAMMAPPER: { "EXTENSIONS.RAMMAPPER": 1, "EXTENSIONS.RAM64K": 0 },
    RAM64K: { "EXTENSIONS.RAMMAPPER": 0, "EXTENSIONS.RAM64K": 1 },

    MSXMUSIC: { "EXTENSIONS.MSXMUSIC": 1 },
    NOMSXMUSIC: { "EXTENSIONS.MSXMUSIC": 0 },

    DOS2: { "EXTENSIONS.DOS2":  1 },
    NODOS2: { "EXTENSIONS.DOS2":  0 },

    SCC: { "EXTENSIONS.SCC": 1 },
    SCCS2: { "EXTENSIONS.SCC": 2 },

    SCCI: { "EXTENSIONS.SCCI": 1 },
    SCCI2: { "EXTENSIONS.SCCI": 2 },

    PAC: { "EXTENSIONS.PAC": 1 },
    PACS2: { "EXTENSIONS.PAC": 2 },

    // Configuration Helper Presets

    NOVSYNCH: { SCREEN_VSYNCH_MODE: 0},
    VSYNCHAUTO: { SCREEN_VSYNCH_MODE: 1},
    VSYNCHFORCED: { SCREEN_VSYNCH_MODE: 2}

};

wmsx = window.wmsx || {};           // Namespace for all classes and objects
