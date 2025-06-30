<form
  onSubmit={handleSubmit(onSubscribe)}
  className="w-full bg-gray-700 border border-gray-600 rounded-2xl p-8 space-y-6 md:max-w-[440px]"
>
  <h2 className="font-heading font-semibold text-gray-200 text-xl">
    Inscrição
  </h2>

  <div className="space-y-3">
    <div className="space-y-2">
      <InputRoot error={!!errors?.name}>
        <InputIcon>
          <User className="size-6" />
        </InputIcon>
        <InputField
          type="text"
          placeholder="Nome completo"
          {...register('name')}
        />
      </InputRoot>

      {errors?.name && (
        <p className="text-danger font-semibold text-xs">
          {errors.name.message}
        </p>
      )}
    </div>

    <div className="space-y-2">
      <InputRoot error={!!errors?.email}>
        <InputIcon>
          <Mail className="size-6" />
        </InputIcon>
        <InputField
          type="text"
          placeholder="E-mail"
          {...register('email')}
        />
      </InputRoot>

      {errors?.email && (
        <p className="text-danger font-semibold text-xs">
          {errors.email.message}
        </p>
      )}
    </div>
  </div>
