export type Language = 'ru' | 'en';

export interface LocaleStrings {
  testing: {
    title: string;
    subtitle: string;
    expect: string;
    actual: string;
    hypothesis: string;
    reality: string;
    testDoubles: string;
    mock: string;
    stub: string;
    fake: string;
    spy: string;
    quote: string;
  };
  serialization: {
    title: string;
    subtitle: string;
    serializable: string;
    externalizable: string;
    parcelable: string;
    kotlinxSerialization: string;
    object: string;
    bytes: string;
  };
  viewmodel: {
    title: string;
    subtitle: string;
    activity: string;
    destroy: string;
    store: string;
    saving: string;
    onCreate: string;
    viewmodelStore: string;
    nonConfigurationInstances: string;
    activityThread: string;
    activityClientRecord: string;
    quote: string;
  };
}

export const locales: Record<Language, LocaleStrings> = {
  ru: {
    testing: {
      title: 'Kotlin Testing Philosophy',
      subtitle: 'Kotlin · Kotest · JUnit · Test Doubles',
      expect: 'expect',
      actual: 'actual',
      hypothesis: 'hypothesis',
      reality: 'reality',
      testDoubles: 'Test Doubles',
      mock: 'Mock',
      stub: 'Stub',
      fake: 'Fake',
      spy: 'Spy',
      quote: 'Controlled simulations of reality',
    },
    serialization: {
      title: 'Serialization',
      subtitle: 'in JVM • Android • Kotlin Multiplatform',
      serializable: 'Serializable',
      externalizable: 'Externalizable',
      parcelable: 'Parcelable',
      kotlinxSerialization: 'kotlinx.serialization',
      object: 'Object',
      bytes: 'Bytes',
    },
    viewmodel: {
      title: 'ViewModel в Activity под капотом',
      subtitle: 'Как она выживает при пересоздании',
      activity: 'Activity',
      destroy: 'destroy()',
      store: 'ViewModelStore',
      saving: 'сохранение',
      onCreate: 'onCreate()',
      viewmodelStore: 'ViewModelStore',
      nonConfigurationInstances: 'NonConfigurationInstances',
      activityThread: 'ActivityThread',
      activityClientRecord: 'ActivityClientRecord',
      quote: 'Магия выживания через ViewModelStore',
    },
  },
  en: {
    testing: {
      title: 'Kotlin Testing Philosophy',
      subtitle: 'Kotlin · Kotest · JUnit · Test Doubles',
      expect: 'expect',
      actual: 'actual',
      hypothesis: 'hypothesis',
      reality: 'reality',
      testDoubles: 'Test Doubles',
      mock: 'Mock',
      stub: 'Stub',
      fake: 'Fake',
      spy: 'Spy',
      quote: 'Controlled simulations of reality',
    },
    serialization: {
      title: 'Serialization',
      subtitle: 'in JVM • Android • Kotlin Multiplatform',
      serializable: 'Serializable',
      externalizable: 'Externalizable',
      parcelable: 'Parcelable',
      kotlinxSerialization: 'kotlinx.serialization',
      object: 'Object',
      bytes: 'Bytes',
    },
    viewmodel: {
      title: 'ViewModel in Activity Under the Hood',
      subtitle: 'How it survives recreation',
      activity: 'Activity',
      destroy: 'destroy()',
      store: 'ViewModelStore',
      saving: 'saving',
      onCreate: 'onCreate()',
      viewmodelStore: 'ViewModelStore',
      nonConfigurationInstances: 'NonConfigurationInstances',
      activityThread: 'ActivityThread',
      activityClientRecord: 'ActivityClientRecord',
      quote: 'The magic of survival through ViewModelStore',
    },
  },
};

