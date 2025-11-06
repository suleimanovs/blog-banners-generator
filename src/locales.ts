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
  fragmentViewModel: {
    title: string;
    subtitle: string;
    fragment: string;
    destroy: string;
    store: string;
    saving: string;
    onCreate: string;
    viewmodelStore: string;
    fragmentManagerViewModel: string;
    childFragments: string;
    retainFragments: string;
    quote: string;
  };
}

export const locales: Record<Language, LocaleStrings> = {
  ru: {
    testing: {
      title: 'Философия тестирования в Kotlin',
      subtitle: 'Kotlin · Kotest · JUnit · Test Doubles',
      expect: 'ожидание',
      actual: 'реальность',
      hypothesis: 'гипотеза',
      reality: 'действительность',
      testDoubles: 'Тестовые дублеры',
      mock: 'Mock',
      stub: 'Stub',
      fake: 'Fake',
      spy: 'Spy',
      quote: 'Контролируемые симуляции реальности',
    },
    serialization: {
      title: 'Сериализация',
      subtitle: 'в JVM • Android • Kotlin Multiplatform',
      serializable: 'Serializable',
      externalizable: 'Externalizable',
      parcelable: 'Parcelable',
      kotlinxSerialization: 'kotlinx.serialization',
      object: 'Объект',
      bytes: 'Байты',
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
    fragmentViewModel: {
      title: 'ViewModel в Fragment под капотом',
      subtitle: 'От ViewModelStore до Retain Fragments',
      fragment: 'Fragment',
      destroy: 'destroy()',
      store: 'ViewModelStore',
      saving: 'сохранение',
      onCreate: 'onCreate()',
      viewmodelStore: 'ViewModelStore',
      fragmentManagerViewModel: 'FragmentManagerViewModel',
      childFragments: 'Child Fragments',
      retainFragments: 'Retain Fragments',
      quote: 'Архитектурные связи для сохранения состояния',
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
    fragmentViewModel: {
      title: 'ViewModel in Fragment Under the Hood',
      subtitle: 'From ViewModelStore to Retain Fragments',
      fragment: 'Fragment',
      destroy: 'destroy()',
      store: 'ViewModelStore',
      saving: 'saving',
      onCreate: 'onCreate()',
      viewmodelStore: 'ViewModelStore',
      fragmentManagerViewModel: 'FragmentManagerViewModel',
      childFragments: 'Child Fragments',
      retainFragments: 'Retain Fragments',
      quote: 'Architectural connections for state preservation',
    },
  },
};

