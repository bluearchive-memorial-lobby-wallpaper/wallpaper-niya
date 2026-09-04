import {
  assertWallpaperDefinition,
  createDialogueLineResolver,
  defineWallpaper,
} from "ba-memorial-lobby-wallpaper-runtime";

export type VoiceLocale = "ja" | "zh-cn" | "ko";
export type SubtitleLocale = "zh-cn" | "ja" | "ko" | "en";

// ---------------------------------------------------------------------------
// Project identity.
//
// This file is the single source of truth for character-specific content.
// Replace every placeholder value with the actual character data before
// building a wallpaper from this template. See docs/CREATING-A-PROJECT.md.
// ---------------------------------------------------------------------------
export const PROJECT = {
  id: "blue-archive-niya",
  slug: "niya",
  title: "Niya",
  editionLabel: `PUBLIC EDITION · ${__WALLPAPER_VERSION__}`,
} as const;

export const VOICE_LOCALES: readonly VoiceLocale[] = ["zh-cn","ja","ko"];
export const SUBTITLE_LOCALES: readonly SubtitleLocale[] = ["zh-cn","ja","ko","en"];

export const BGM = {
  title: "Daily Routine 247",
  path: `./assets/${PROJECT.slug}/bgm/my-character-bgm.flac`,
} as const;

export interface DialogueLine {
  id: string;
  text: Record<SubtitleLocale, string>;
}

export interface DialogueDefinition {
  index: number;
  motionAnimation: string;
  attachmentAnimation: string;
  duration: number;
  lines: readonly DialogueLine[];
}

// Replace the placeholder model/animation/bone values below with values
// obtained from `npm run inspect:spine` after placing the real model in
// local-assets/original/model/.
export const MODEL = {
  binary: `./assets/${PROJECT.slug}/model/my-character.skel`,
  atlases: {
    "2k": `./assets/${PROJECT.slug}/model/my-character.atlas`,
    "4k": `./assets/${PROJECT.slug}/model-4k/my-character.atlas`,
    "8k": `./assets/${PROJECT.slug}/model-8k/my-character.atlas`,
  },
  spineVersion: "4.2.33",
  introAnimation: "Start_Idle_01",
  idleAnimation: "Idle_01",
  designViewport: {
    width: 2560,
    height: 1600,
    centerX: 0,
    centerY: 900,
  },
  tracks: {
    base: 0,
    motion: 1,
    attachment: 2,
  },
  interaction: {
    eyeBone: "Touch_Eye",
    headControlBone: "Touch_Point",
    headAnchorBone: "Touch_Point_Key",
    lookAnimation: "Look_01_M",
    lookEndMotionAnimation: "LookEnd_01_M",
    lookEndAttachmentAnimation: "LookEnd_01_A",
    patMotionAnimation: "Pat_01_M",
    patAttachmentAnimation: "Pat_01_A",
    patEndMotionAnimation: "PatEnd_01_M",
    patEndAttachmentAnimation: "PatEnd_01_A",
    headRadius: { x: 270, y: 230 },
    bodyFromHead: { x: -70, y: -610, radiusX: 620, radiusY: 900 },
    eyeClamp: { x: 112.5, y: 200 },
    patClamp: 34,
    dragThresholdPixels: 9,
    cooldownSeconds: 0.55,
    dialogueGraceSeconds: 0.75,
  },
} as const;

// Example dialogue placeholders. Replace the ids with the real event ids used
// by the voice files and fill in the localized subtitle text.
export const DIALOGUES: readonly DialogueDefinition[] = [
  {
    "index": 1,
    "motionAnimation": "Talk_01_M",
    "attachmentAnimation": "Talk_01_A",
    "duration": 21.33333396911621,
    "lines": [
      {
        "id": "ch0109_memoriallobby_1_1",
        "text": {
          "zh-cn": "喵，喵哈哈……呃~我说~老师啊~？",
          "ja": "にゃ、にゃはは……\nもしも～し、先生～？",
          "ko": "냐, 냐하하……\n저기~ 요~ 선생님~?",
          "en": "N-Nyahaha... Um, Sensei?"
        }
      },
      {
        "id": "ch0109_memoriallobby_1_2",
        "text": {
          "zh-cn": "哎呀呀，您的表情真可怕……这样一点都不适合您哦？",
          "ja": "あらあら、怖い顔……。\n先生には似合いませんよぉ？",
          "ko": "어머어머, 무서운 얼굴…….\n선생님께 안 어울린답니다?",
          "en": "Oh wow, that's a scary face... It doesn't suit you, you know?"
        }
      }
    ]
  },
  {
    "index": 2,
    "motionAnimation": "Talk_02_M",
    "attachmentAnimation": "Talk_02_A",
    "duration": 20.33333396911621,
    "lines": [
      {
        "id": "ch0109_memoriallobby_2_1",
        "text": {
          "zh-cn": "啊，难道说……您真的生气了~？",
          "ja": "もしかして……\n本当に怒ってます？",
          "ko": "혹시나……\n정말로 화나셨나요~?",
          "en": "...Are you actually angry?"
        }
      },
      {
        "id": "ch0109_memoriallobby_2_2",
        "text": {
          "zh-cn": "嗯，这个嘛，虽然我也明白，喵哈哈……",
          "ja": "いや、まぁ……\n分かっていますけど……\nにゃは……。",
          "ko": "아니, 뭐, 알고는\n있습니다만, 아핫…….",
          "en": "I mean, well, I can already tell but, aha..."
        }
      }
    ]
  },
  {
    "index": 3,
    "motionAnimation": "Talk_03_M",
    "attachmentAnimation": "Talk_03_A",
    "duration": 23.33333396911621,
    "lines": [
      {
        "id": "ch0109_memoriallobby_3_1",
        "text": {
          "zh-cn": "总之就是说~我很抱歉……",
          "ja": "ええと……はい……\n申し訳ありません。",
          "ko": "그게 저~ 네~ 네~\n송구합니다…….",
          "en": "So, um... Yeah, I... I apologize..."
        }
      },
      {
        "id": "ch0109_memoriallobby_3_2",
        "text": {
          "zh-cn": "但是~该怎么说呢~毕竟我们也有自己的内情嘛~",
          "ja": "でもほら、\nなんといいますかぁ〜\nこちらにも事情という\nものがありましてねぇ～？",
          "ko": "그렇지만~ 뭐라고 할까~\n저희 쪽에도 내부 사정이란 게\n있어서~",
          "en": "But still, how should I put this...? We all have our reasons for what we do..."
        }
      }
    ]
  },
  {
    "index": 4,
    "motionAnimation": "Talk_04_M",
    "attachmentAnimation": "Talk_04_A",
    "duration": 15.000000953674316,
    "lines": [
      {
        "id": "ch0109_memoriallobby_4_1",
        "text": {
          "zh-cn": "喵哈？！不不不不！",
          "ja": "にゃはっ！？いえいえ！",
          "ko": "냐핫?! 아뇨, 아뇨!",
          "en": "Eh?! No, no!"
        }
      },
      {
        "id": "ch0109_memoriallobby_4_2",
        "text": {
          "zh-cn": "绝对没有！我有在反省啦！真的！",
          "ja": "滅相もない！\n反省していますとも！ええ！",
          "ko": "당치도 않습니다!\n반성하고 있습니다!\n예! 예!",
          "en": "I'm not making excuses! I'm self-reflecting! Uh-huh, uh-huh!"
        }
      }
    ]
  },
  {
    "index": 5,
    "motionAnimation": "Talk_05_M",
    "attachmentAnimation": "Talk_05_A",
    "duration": 16,
    "lines": [
      {
        "id": "ch0109_memoriallobby_5",
        "text": {
          "zh-cn": "嗯……我有在诚心诚意反省了……您就原谅我这一次吧……？",
          "ja": "ええ……心から\n反省しておりますので……\nどうか、\n許してもらえませんか？",
          "ko": "네…… 진심으로\n반성하고 있으니까…….\n어떻게, 한 번만\n용서해 주심이……?",
          "en": "Yeah... I'm totally self-reflecting right now.\nSo, how about you forgive me this one time?"
        }
      }
    ]
  }
] as const;

export function voicePath(eventId: string, locale: VoiceLocale): string {
  return `./assets/${PROJECT.slug}/audio/${locale}/${eventId.toLowerCase()}.ogg`;
}

export const WALLPAPER_DEFINITION = defineWallpaper({
  schemaVersion: 1,
  id: PROJECT.id,
  model: {
    binary: MODEL.binary,
    atlases: MODEL.atlases,
    spineVersion: MODEL.spineVersion,
    designViewport: MODEL.designViewport,
  },
  animations: {
    intro: MODEL.introAnimation,
    idle: MODEL.idleAnimation,
    tracks: MODEL.tracks,
  },
  interactions: {
    eyeBone: MODEL.interaction.eyeBone,
    headControlBone: MODEL.interaction.headControlBone,
    headAnchorBone: MODEL.interaction.headAnchorBone,
    look: {
      animation: MODEL.interaction.lookAnimation,
      endMotionAnimation: MODEL.interaction.lookEndMotionAnimation,
      endAttachmentAnimation: MODEL.interaction.lookEndAttachmentAnimation,
    },
    pat: {
      motionAnimation: MODEL.interaction.patMotionAnimation,
      attachmentAnimation: MODEL.interaction.patAttachmentAnimation,
      endMotionAnimation: MODEL.interaction.patEndMotionAnimation,
      endAttachmentAnimation: MODEL.interaction.patEndAttachmentAnimation,
    },
    headRadius: MODEL.interaction.headRadius,
    bodyFromHead: MODEL.interaction.bodyFromHead,
    eyeClamp: MODEL.interaction.eyeClamp,
    patClamp: MODEL.interaction.patClamp,
    dragThresholdPixels: MODEL.interaction.dragThresholdPixels,
    cooldownSeconds: MODEL.interaction.cooldownSeconds,
    dialogueGraceSeconds: MODEL.interaction.dialogueGraceSeconds,
  },
  dialogues: DIALOGUES.map((dialogue) => ({
    index: dialogue.index,
    motionAnimation: dialogue.motionAnimation,
    attachmentAnimation: dialogue.attachmentAnimation,
    durationSeconds: dialogue.duration,
    lines: dialogue.lines,
  })),
  audio: {
    bgm: BGM,
    voicePath,
    voiceLocales: VOICE_LOCALES,
    subtitleLocales: SUBTITLE_LOCALES,
  },
});

assertWallpaperDefinition(WALLPAPER_DEFINITION);

export const findDialogueLine = createDialogueLineResolver(
  WALLPAPER_DEFINITION.dialogues,
);
