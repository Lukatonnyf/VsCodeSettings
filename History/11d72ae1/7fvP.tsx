export default function InviteForm() {
  return (
    <form

      className="w-full bg-gray-700 border border-gray-600 rounded-2xl p-8 space-y-6 md:max-w-[440px]"
    >
      <h2 className="font-heading font-semibold text-gray-200 text-xl">
        Inscrição
      </h2>

      <div className="space-y-3">
        <div className="space-y-2">
          {/* error={!!errors?.name} */}
          {/*   {...register('name')  */}
          <InputRoot >
            <InputIcon>
              <User className="size-6" />
            </InputIcon>
            <InputField
              type="text"
              placeholder="Nome completo"
           }
            />
          </InputRoot>
          {/*
      {errors?.name && (
        <p className="text-danger font-semibold text-xs">
          {errors.name.message}
        </p>
      )} */}
        </div>

        <div className="space-y-2">
          {/*  error={!!errors?.email} */}
          <InputRoot>
            <InputIcon>
              <Mail className="size-6" />
            </InputIcon>
            <InputField
              type="text"
              placeholder="E-mail"
              {...register('email')}
            />
          </InputRoot>

          {/* {errors?.email && (
        <p className="text-danger font-semibold text-xs">
          {errors.email.message}
        </p>
      )} */}
        </div>
      </div>

      )
}
